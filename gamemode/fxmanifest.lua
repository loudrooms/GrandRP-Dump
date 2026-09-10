fx_version 'cerulean'
game 'gta5'

ui_page 'ui/index.html'

-- Copied client modules are loaded at runtime via LoadResourceFile (see client/runtime-require.js)
files {
  'client/**/*.js',
  'client/**/*.json',
  -- NUI host + all embedded UI assets (CEF, chat, etc.)
  'ui/index.html',
  'ui/**/*',
}

server_scripts {
  'bridge/server.js',
  'server/index.js'
}
client_scripts {
  'bridge/client.js',
  'client/runtime-require.js',
  'client/index.js'
}