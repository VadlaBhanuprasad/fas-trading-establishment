#!/bin/bash

echo "🚀 Starting FAS Trading & Establishment Application..."
echo ""

if [ ! -f "server/.env" ]; then
    echo "⚠️  Warning: server/.env file not found!"
    echo "Please create server/.env from server/.env.example"
    echo "See server/README.md for setup instructions"
    exit 1
fi

echo "✅ Environment file found"
echo ""

echo "📧 Starting backend server..."
cd server
npm start &
BACKEND_PID=$!
cd ..

echo "✅ Backend server started (PID: $BACKEND_PID)"
echo ""

sleep 2

echo "🎨 Starting frontend development server..."
npm run dev

trap "echo ''; echo '🛑 Shutting down servers...'; kill $BACKEND_PID; exit" INT TERM
