var playlist = {}
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'

function updatePlaylist (playlist, artist, title){
  
  return Object.assign(playlist, {artist : title})
}

function removeFromPlaylist(playlist, name){
  return delete playlist.name
}

t = updatePlaylist(playlist,'Phil Ochs',"Here's to the State of Mississippi" )
console.log(t)