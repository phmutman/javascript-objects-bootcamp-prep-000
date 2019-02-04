var playlist = {}

function opdatePlaylist (playlist, name, title){
  
  return Object.assign({}, playlist, {name : title})
}

function removeFromPlaylist(playlist, name){
  return delete playlist.name
}