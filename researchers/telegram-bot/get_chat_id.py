#!/usr/bin/env python3
"""
Safe way to get your Telegram Chat ID without exposing your bot token
"""

import os
import asyncio
from telegram import Bot

async def get_chat_id():
    """Get your chat ID safely"""
    
    # Try to load token from .env.local
    try:
        from dotenv import load_dotenv
        project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
        env_path = os.path.join(project_root, '.env.local')
        load_dotenv(env_path)
    except ImportError:
        pass
    
    bot_token = os.getenv('TELEGRAM_BOT_TOKEN')
    
    if not bot_token:
        print("❌ No TELEGRAM_BOT_TOKEN found in .env.local")
        print("Add this line to your .env.local file:")
        print("TELEGRAM_BOT_TOKEN=your_token_here")
        return
    
    print("🤖 Connecting to your bot...")
    
    try:
        bot = Bot(token=bot_token)
        
        # Get updates (recent messages)
        updates = await bot.get_updates()
        
        if not updates:
            print("📱 No messages found!")
            print("Please:")
            print("1. Find your bot on Telegram")
            print("2. Send it a message like 'hello'")
            print("3. Run this script again")
            return
        
        print(f"✅ Found {len(updates)} message(s):")
        print()
        
        for update in updates[-3:]:  # Show last 3 messages
            chat = update.message.chat
            user = update.message.from_user
            message_text = update.message.text
            
            print(f"💬 Message: '{message_text}'")
            print(f"👤 From: {user.first_name} (ID: {user.id})")
            print(f"🆔 Chat ID: {chat.id}")
            print(f"📱 Chat Type: {chat.type}")
            print()
        
        # Show the most recent chat ID
        latest_chat_id = updates[-1].message.chat.id
        print("🎯 Use this Chat ID:")
        print(f"TELEGRAM_CHAT_ID={latest_chat_id}")
        print()
        print("Add this line to your .env.local file!")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        print("Make sure your bot token is correct")

if __name__ == "__main__":
    asyncio.run(get_chat_id())