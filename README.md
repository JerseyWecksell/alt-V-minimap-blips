# alt-V-minimap-blips
================By Jersey==================
Blips for GTA V server on alt:V Multiplayer
===========================================
Here are already collected certain points on the map for different blips.
And in order not to waste valuable time searching for various coordinates, I have gathered here the main and additional points.
You can also add something of your own.

Additional resources that I used:
 https://wiki.altv.mp/HUD:Blips
 https://altmp.github.io/altv-typings/classes/_alt_client_.blip.html#route

In order for markers to be displayed in the game you must add a request to the server side!!

Example:

alt.on('playerConnect', (player) => {
const blip = ["MarketA","MarketB"];
	for (let blips of blip) {
    alt.emitClient(player, blips);
  }
});
