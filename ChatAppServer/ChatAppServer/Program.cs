using ChatAppServer.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(opt => opt.AddDefaultPolicy(policy =>
{
    policy.AllowCredentials().AllowAnyHeader().AllowAnyMethod().SetIsOriginAllowed(x => true);
}));

builder.Services.AddSignalR();

var app = builder.Build();

app.UseCors();
app.UseRouting();

app.MapHub<ChatHub>("/chatHub");


app.Run();

