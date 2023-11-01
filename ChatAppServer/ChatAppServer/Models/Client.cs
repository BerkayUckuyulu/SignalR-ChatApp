using System;
namespace ChatAppServer.Models
{
	public class Client
	{
		public string ConnectionId { get; set; }
		public string NickName { get; set; }
		public List<string> GroupNameList { get; set; } = new();
	}
}

