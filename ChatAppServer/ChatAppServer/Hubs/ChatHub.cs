using System;
using ChatAppServer.Datas;
using ChatAppServer.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatAppServer.Hubs
{
    public class ChatHub : Hub
    {
        public async Task GetNickName(string nickName)
        {
            ClientSource.ClientList.Add(new() { ConnectionId = Context.ConnectionId, NickName = nickName });

            await Clients.Others.SendAsync("clientJoined", nickName);
        }

        public async Task CreateAndJoinGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

            var client = ClientSource.ClientList.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);

            if (!client.GroupNameList.Contains(groupName))
                client?.GroupNameList.Add(groupName);

            await Clients.All.SendAsync("groupAdded", groupName);
        }

        public async Task JoinGroup(string[] groupNames)
        {
            var client = ClientSource.ClientList.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);

            foreach (var groupName in groupNames)
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
                if (!client.GroupNameList.Contains(groupName))
                    client?.GroupNameList.Add(groupName);
            }
        }

        public async Task SendMessageWithNameList(string[] messageAndClients)
        {
            var clientIdList = ClientSource.ClientList.Where(x => messageAndClients.Contains(x.NickName)).Select(client=>client.ConnectionId);

            var senderClient = ClientSource.ClientList.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);
            await Clients.Clients(clientIdList).SendAsync("receiveMessage",new {message=messageAndClients[0], senderClient = senderClient } );
        }

        public async Task SendMessageWithGroupList(string message)
        {
            var client = ClientSource.ClientList.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);
            await Clients.Groups(client.GroupNameList).SendAsync("receiveMessage", new { message = message, senderClient = client });
        }
    }
}

