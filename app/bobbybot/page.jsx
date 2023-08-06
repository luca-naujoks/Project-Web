"use client";
import { TypingText } from "../../components/typing";

export default function Page() {
  var dt = "dt";
  var code = `
  import discord
  from discord.ext import commands
  
  import os, datetime, time
  
  client = discord.Client()
  e = ""
  
  class BobbyBot(commands.Bot):

  > def __init__(self, token: str):
  
  
  def init_cogs(self):
            e = ""
            files = os.listdir("cogs")
            cogs = []
            now = datetime.datetime.now()
            dt = now.strftime("%d/%m/%Y %H:%M:%S")
            for f in files:
            if not f.startswith("__"):
            if f.endswith(".py"):
            cogs.append(f[:-3])
            
            if not cogs:
            print("Couldnt find any cogs to load")
            else:
            for cog in cogs:
            print("Loading Module: " + cog + "")
            
            > def run(self):
            `;
  var chat = `
    Bobby68
    headortails
              
    BobbyBot
    you against the bank
    Chose your side Head or Tail
    
    Bobby68
    Head
    
    BobbyBot
    Oh no uu loose NOOB
    -----------------------
    Bobby68
    waifu

    Bobby68
    clear 1
    
    BobbyBot
    1 Message deleted successfully
    `;

  return (
    <div className="m-5">
      <div
        id="system"
        className="lg:flex xs:flex-row md:justify-evenly h-screen"
      >
        <div className="p-3 mt-[10%]">
          <h1 className="text-3xl font-bold">Bobby Bot</h1>
          <h2 className="text-3xl font-bold">Working system behind the bot</h2>

          <div id="python" className="mt-12">
            <p>
              My Bot is a comprehensive system designed to provide a seamless
              user experience.
            </p>
            <p>
              Built with Python 3.10, it uses the latest language features to
              ensure fast and efficient
            </p>
            <p>performance.</p>
          </div>
          <div id="database" className="mt-3">
            <p>
              The bot is connected to an SQL database, providing a reliable and
              secure method of storing data.{" "}
            </p>
            <p>
              This feature allows users to securely store their data,
              preferences and settings.
            </p>
            <br />
          </div>
          <div id="youtube-dl" className="">
            <p>
              In addition, the bot includes music functionality with the popular
              YouTube-dl library.{" "}
            </p>
            <p>
              This integration allows users to search and play music directly
              within the bot, without{" "}
            </p>
            <p>
              having to navigate to external sites or applications. With a huge
              library of music{" "}
            </p>
            <p>
              on YouTube, the possibilities for musical entertainment are are
              endless.
            </p>
          </div>
        </div>
        <div className="bg-myblue rounded-lg h-225 w-128">
          <pre className="p-3 text-sm text-gray-500 ">{code}</pre>
        </div>
      </div>
      <div
        id="commands"
        className="lg:flex xs:flex-row md:justify-around h-screen"
      >
        <div className="p-3">
          <h2 className="text-3xl font-bold">Command System</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className=" p-4">
              <h2 className="text-xl font-bold">Music</h2>
              <p>- play (p)</p>
              <p>- pause</p>
              <p>- resume</p>
              <p>- skip</p>
              <p>- leave (l)</p>
            </div>
            <div className=" p-4">
              <h2 className="text-xl font-bold">Arcade</h2>
              <p>- new</p>
              <p>- wallet</p>
              <p>- headortail</p>
            </div>
            <div className=" p-4">
              <h2 className="text-xl font-bold">Else</h2>
              <p>- info</p>
              <p>- clear</p>
              <p>- valo</p>
              <p>- csgo</p>
            </div>
            <div className=" p-4">
              <h2 className="text-xl font-bold">FSK18</h2>
              <p>- waifu</p>
            </div>
          </div>
        </div>
        <div className="bg-myblue rounded-lg w-128 h-225">
          <pre className="p-3 text-sm rounded-lg text-gray-500 ">
            <TypingText
              text={chat}
              color="text-gray-500"
              size="text-md"
              time="30"
            />
          </pre>
        </div>
      </div>
      <div id="arcade" className="lg:flex xs:flex-row md:justify-evenly">
        <div className="p-3 mt-[10%]">
          <h1 className="text-3xl font-bold">Bobbys Arcade</h1>
          <h2 className="text-3xl font-bold">
            System behnint the bot and web Arcade
          </h2>

          <div id="where" className="mt-12">
            <p>
              The Arcade System is an interactive platform that includes a
              Discord bot and a website.
            </p>
            <p>
              Both use the same MongoDB database to store and synchronise
              scores, leaderboards
            </p>
            <p>and rewards.</p>
          </div>
          <div id="what" className="mt-3">
            <p>
              The Discord Bot allows users to play different games directly in
              the chat,
            </p>
            <p>
              while the website has an attractive user interface using Nextjs 13
              and React.
            </p>
          </div>
        </div>
        <div>
          <pre className="p-3 text-sm text-gray-500 rounded-lg  h-225 w-128"></pre>
        </div>
      </div>
    </div>
  );
}
