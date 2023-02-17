"use client";
import axios from "axios";
import { useEffect, useState } from "react";
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
            `
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
    `
const [bot_status, setbot_status] = useState()
    
    async function get_bot_status() {
      const headers = {
        Authorization: `Bot ${process.env.botToken}`,
      };
       const response = await axios.get("https://discord.com/api/gateway/bot", {
          headers,
        });
        if (response.status === 200) {
              console.log("Bot is online and connected to Discord API");
              setbot_status("online")
            }
            console.log("Failed to connect to Discord API");
            setbot_status("offline")
    }

useEffect(() => {
  get_bot_status();
})

  return (
    <div className="m-5">
      <div id="system" className="lg:flex xs:flex-row md:justify-evenly h-screen">
        <div className="p-3 mt-[10%]">
          <h1 className="text-3xl font-bold">Bobby Bot</h1>
          <h2 className="text-3xl font-bold">Working System behind the Bot</h2>

          <div id="python" className="mt-12">
            <p>
              My bot is a comprehensive system designed to offer a seamless user
              experience.
            </p>
            <p>
              Built with Python 3.10, it leverages the latest language features
              to ensure fast and efficient
            </p>
            <p>performance.</p>
          </div>
          <div id="database" className="mt-3">
            <p>
              The bot is connected to a SQL database, providing a reliable and
              secure method for storing user data.{" "}
            </p>
            <p>
              With this feature, users can securely store their personal data,{" "}
            </p>
            <p>preferences, and settings.</p>
          </div>
          <div id="youtube-dl" className="mt-12">
            <p>
              In addition to this, the bot includes music functionality with the
              popular YouTube-dl library.{" "}
            </p>
            <p>
              This integration allows users to search for and play music
              directly within the bot, without{" "}
            </p>
            <p>
              having to navigate to external sites or applications. With a vast
              library of music available{" "}
            </p>
            <p>
              on YouTube, the possibilities for musical entertainment are
              endless.
            </p>
          </div>
        </div>
        <div className="bg-myblue rounded-lg h-225 w-128">
          <pre className="p-3 text-sm text-gray-500 ">{code}</pre>
          <pre className="p-3 text-sm text-gray-500">    {bot_status}</pre>
        </div>
      </div>
      <div id="commands" className="lg:flex xs:flex-row md:justify-around h-screen">
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
          <pre className="p-3 text-sm rounded-lg text-gray-500 "><TypingText text={chat} color="text-gray-500" size="text-md" time="30"/></pre>
        </div>
      </div>
      <div id="arcade" className="lg:flex xs:flex-row md:justify-evenly">
        <div className="p-3 mt-[10%]">
          <h1 className="text-3xl font-bold">Bobbys Arcade</h1>
          <h2 className="text-3xl font-bold">System behnint the bot and web Arcade</h2>

          <div id="where" className="mt-12">
            <p>
            The Arcade System is an interactive platform that includes a Discord bot and a website.
            </p>
            <p>Both use the same MongoDB database to store and synchronize scores, leaderboards</p>
            <p>and rewards.</p>
          </div>
          <div id="what" className="mt-3">
            <p>
            The Discord bot allows users to play various games directly in the chat,
            </p>
            <p>while the website provides an appealing user interface with Nextjs 13 and React.</p>
          </div>
          <div id="suiiii" className="mt-3">
            <p>

            </p>
          </div>
        </div>
        <div>
          <pre className="p-3 text-sm text-gray-500 bg-myblue rounded-lg  h-225 w-128"></pre>
        </div>
      </div>
    </div>
  );
}
