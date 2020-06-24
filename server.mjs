import * as alt from 'alt';
import chat from 'chat';


alt.on('playerConnect', (player) => {
const blip = ["MarketA","MarketB","MarketC","MarketD","MarketF","MarketG","MarketH","MarketI","MarketJ","MarketK","MarketL","MarketM","MarketN","MarketO","MarketP","MarketR","MarketS","MarketT","MarketU","RefillA","RefillB","RefillC","RefillD","RefillE","RefillF","RefillG","RefillH","RefillI","RefillJ","RefillK","RefillL","RefillM","RefillN","RefillO","RefillP","RefillR","RefillS","ClothA","ClothB","ClothC","ClothD","ClothE","ClothF","ClothG","ClothH","ClothI","ClothJ","ClothK","ClothL","ClothM","ClothN","ClothO","BarbA","BarbB","BarbC","BarbD","BarbE","BarbF","TattoA","TattoB","TattoC","TattoD","TattoE","TattoF","GunA","GunB","GunC","GunD","GunE","GunF","GunG","GunH","GunI","GunJ","BankA","BankB","BankC","BankD","BankE","BankF","BankG","AtmA","AtmB","AtmC","AtmD","AtmE","AtmF","AtmG","AtmH","AtmI","AtmJ","AtmK","AtmL","AtmM","AtmN","AutspA","AutspB","AutspC","AutspD","AutspE","MotA","MotB","AutmarkA","CustomA","CustomB","CustomC","CustomD","CustomE","CustomF","CustomG","WashA","WashB","TaxiA","BusA","PoliceA","MafiaRus","MafiaArm","MafiaMex","MafiaItal","BandA","BandB","BandC","BandD","BandE","KlubA","KlubB","KlubC","KlubD","MechA","NewsA","CargA","ZonaA","MerA","MatA","TrackA","BattleA","SawA","CenA","ArmyA","CasA","SA","AirA"];
	player.model = 'mp_m_freemode_01';
	player.spawn(spawnPos.x, spawnPos.y, spawnPos.z, 0);
	for (let blips of blip) {
    alt.emitClient(player, blips);
  }
