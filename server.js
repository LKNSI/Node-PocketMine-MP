/////////////////////////
/*

	A Full 1-1 conversion of PHP to NodeJS (Javascript)

*/
////////////////////////

const fs = require('fs');
const http = require('http');

/*
	Node-pocketmine-MP Rewrites - Start
*/

const getConfigInt = require('./config.js')

/*
	Node-pocketmine-MP Rewrites - End
*/

const BlockFactory = require('./block/BlockFactory');
const CommandReader = require('./command/CommandReader');
const CommandSender = require('./command/CommandSender');
const ConsoleCommandSender = require('./command/ConsoleCommandSender');
const PluginIdentifiableCommand = require('./command/PluginIdentifiableCommand');
const SimpleCommandMap = require('./command/SimpleCommandMap');
const Entity = require('./entity/Entity');
const Skin = require('./entity/Skin');
const HandlerList = require('./event/HandlerList');
const LevelInitEvent = require('./event/level/HandlerList');
const CommandEvent = require('./event/server/CommandEvent');
const QueryRegenerateEvent = require('./event/server/QueryRegenerateEvent');
const ServerCommandEvent = require('./event/server/ServerCommandEvent');
const CraftingManager = require('./inventory/CraftingManager');
const Enchantment = require('./item/enchantment/Enchantment')
const Item = require('./item/Item');
const ItemFactory = require('./item/ItemFactory');
const BaseLang = require('./lang/BaseLang');
const TextContainer = require('./lang/TextContainer');
const Biome = require('./level/biome/Biome');
const LevelProvider = require('./level/format/io/LevelProvider');
const LevelProviderManager = require('./level/format/io/LevelProviderManager');
const Generator = require('./level/generator/Generator');
const GeneratorManager = require('./level/generator/GeneratorManager');
const Level = require('./level/Level');
const LevelException = require('./level/LevelException');
const EntityMetadataStore = require('./metadata/EntityMetadataStore');
const LevelMetadataStore = require('./metadata/LevelMetadataStore');
const PlayerMetadataStore = require('./metadata/PlayerMetadataStore');
const BigEndianNBTStream = require('./nbt/BigEndianNBTStream')
const NBT = require('./nbt/NBT');
const ByteTag = require('./nbt/tag/ByteTag');
const CompoundTag = require('./nbt/tag/CompoundTag');
const DoubleTag = require('./nbt/tag/DoubleTag');
const FloatTag = require('./nbt/tag/FloatTag');
const IntTag = require('./nbt/tag/IntTag');
const ListTag = require('./nbt/tag/ListTag');
const LongTag = require('./nbt/tag/LongTag');
const ShortTag = require('./nbt/tag/ShortTag');
const StringTag = require('./nbt/tag/StringTag');
const AdvancedSourceInterface = require('./network/AdvancedSourceInterface');
const CompressBatchedTask = require('./network/CompressBatchedTask');
const BatchPacket = require('./network/mcpe/protocol/BatchPacket');
const DataPacket = require('./network/mcpe/protocol/DataPacket');
const PlayerListPacket = require('./network/mcpe/protocol/PlayerListPacket');
const ProtocolInfo = require('./network/mcpe/protocol/ProtocolInfo');
const PlayerListEntry = require('./network/mcpe/protocol/types/PlayerListEntry');
const SkinAdapterSingleton = require('./network/mcpe/protocol/types/SkinAdapterSingleton');
//	Need to replace, https://github.com/mhsjlw/node-raknet
const RakLibInterface = require('./network/mcpe/protocol/RakLibInterface');
const Network = require('./network/Network');
const QueryHandler = require('./network/query/QueryHandler');
const RCON = require('./network/rcon/RCON');
const UPNP = require('./network/upnp/UPnP');
const BanList = require('./permission/BanList');
const DefaultPermissions = require('./permission/DefaultPermissions');
const PermissionManager = require('./permission/PermissionManager');
//	Plugin Solution Needs Devising, looking at AVVIO
const ResourcePackManager = require('./resourcepacks/ResourcePackManager');
//	Nodejs is generally Async, just here for brevity and what needs to be replaced.
const AsyncPool = require('./scheduler/AsyncPool');
const SendUsageTask = require('./scheduler/SendUsageTask');
//	Might need to understand if sleeping is entirely necessarily anymore with ES6 promises.
const SleeperHandler = require('./snooze/SleeperHandler');
const SleeperNotifier = require('./snooze/SleeperNotifier');
const Tile = require('./tile/Tile');
const Timings = require('./timings/Timings');
const TimingsHandler = require('./timings/TimingsHandler');
const AutoUpdater = require('./updater/AutoUpdater');
const Config = require('./utils/Config');
// Needs to be replaced by Nodejs HTTP Library instead.
const Internet = require('./utils/Internet');
const MainLogger = require('./utils/MainLogger');
const Process = require('./utils/Process');
const Terminal = require('./utils/Terminal');
const TextFormat = require('./utils/TextFormat');
const Utils = require('./utils/Utils');
//	Using Community UUID Handler Instead.
const {v4: uuidv4} = require('uuid');

// Replicating pocketmine 'namespace', through a object dictionary. pocketmine["BlockFactory"] === BlockFactory, equally pocketmine["BlockFactory"].someFunction === BlockFactory.someFunction
// Why not just use the standard constructors? To provider the same namespace paradigm to PHP users.

/*
	Root Files
	
*/

const Player = require('./Player')


const pocketmine = {
	"BlockFactory": BlockFactory,
	"CommandReader": CommandReader,
	"CommandSender": CommandSender,
	"ConsoleCommandSender": ConsoleCommandSender,
	"PluginIdentifiableCommand": PluginIdentifiableCommand,
	"SimpleCommandMap": SimpleCommandMap,
	"Entity": Entity,
	"Skin": Skin,
	"HandlerList": HandlerList,
	"LevelInitEvent": LevelInitEvent,
	"LevelLoadEvent": LevelLoadEvent,
	"PlayerDataSaveEvent": PlayerDataSaveEvent,
	"CommandEvent": CommandEvent,
	"QueryRegenerateEvent": QueryRegenerateEvent,
	"Enchantment": Enchantment,
	"Item": Item,
	"ItemFactory": ItemFactory,
	"BaseLang": BaseLang,
	"TextContainer": TextContainer,
	"Biome": Biome,
	"LevelProvider": LevelProvider,
	"LevelProviderManager": LevelProviderManager,
	"Generator": Generator,
	"GeneratorManager": GeneratorManager,
	"Level": Level,
	"LevelException": LevelException,
	"EntityMetadataStore": EntityMetadataStore,
	"LevelMetadataStore": LevelMetadataStore,
	"PlayerMetadataStore": PlayerMetadataStore,
	"BigEndianNBTStream": BigEndianNBTStream,
	"NBT": NBT,
	"ByteTag": ByteTag,
	"CompoundTag": CompoundTag,
	"DoubleTag": DoubleTag,
	"FloatTag": FloatTag,
	"IntTag": IntTag,
	"ListTag": ListTag,
	"LongTag": LongTag,
	"ShortTag": ShortTag,
	"StringTag": StringTag,
	"AdvancedSourceInterface": AdvancedSourceInterface,
	"CompressBatchedTask": CompressBatchedTask,
	"BatchPacket": BatchPacket,
	"DataPacket": DataPacket,
	"PlayerListPacket": PlayerListPacket,
	"ProtocolInfo": ProtocolInfo,
	"PlayerListEntry": PlayerListEntry,
	"SkinAdapterSingleton": SkinAdapterSingleton,
	"RakLibInterface": RakLibInterface,
	"Network": Network,
	"QueryHandler": QueryHandler,
	"RCON": RCON,
	"UPNP": UPNP,
	"BanList": BanList,
	"DefaultPermissions": DefaultPermissions,
	"PermissionManager": PermissionManager,
	"ResourcePackManager": ResourcePackManager,
	"AsyncPool": AsyncPool,
	"SendUsageTask": SendUsageTask,
	"SleeperHandler": SleeperHandler,
	"SleeperNotifier": SleeperNotifier,
	"Tile": Tile,
	"Timings": Timings,
	"TimingsHandler": TimingsHandler,
	"AutoUpdater": AutoUpdater,
	"Config": Config,
	"Internet": Internet,
	"MainLogger": MainLogger,
	"Process": Process,
	"Terminal": Terminal,
	"TextFormat": TextFormat,
	"Utils": Utils
}

/*
	Most 'use function' directives from PHP are not required in Nodejs as they are standard.
	Hence they are omitted here.
*/


const BROADCAST_CHANNEL_ADMINISTRATIVE = "pocketmine.broadcast.admin"
const BROADCAST_CHANNEL_USERS = "pocketmine.broadcast.user" 

class Server {

	constructor(){

		// ES6 classes are syntatic sugar of constructors, and by virtue are automatically private. # = Static.
		// this can be seen as writing $this->nextTick as this.nextTick in JS.

		this.instance = null;
		this.sleeper;
		this.tickSleeper;
		this.banByName;
		this.banByIP;
		this.operators;
		this.whitelist;
		this.isRunning = true;
		this.hasStopped = false;
		this.pluginManager;
		this.profilingTickRate = 20;
		this.updater;
		this.asyncPool;
		this.tickCounter = 0;
		this.nextTick = 0;
		this.tickAverage = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
		this.useAverage = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		this.currentTPS = 20;
		this.currentUse = 0;
		this.doTitleTick = true;
		this.sendUsageTicker = 0;
		this.dispatchSignals = false;
		this.logger;
		this.memoryManager;
		this.console;
		this.commandMap;
		this.craftingManager;
		this.resourceManager;
		this.maxPlayers;
		this.onlineMode = true;
		this.autoSave;
		this.entityMetadata;
		this.playerMetadata;
		this.levelMetadata;
		this.network;
		this.networkCompressionAsync = true;
		this.networkCompressionLevel = 7;
		this.autoSaveTicker = 0;
		this.autoSaveTicks = 6000;
		this.baseLang;
		this.forceLanguage = false;
		this.serverID;
		this.autoloader;
		this.dataPath;
		this.pluginPath;
		this.uniquePlayers;
		this.queryHandler;
		this.queryRegenerateTask;
		this.properties;
		this.config;
		this.players = [];
		this.loggedInPlayers = [];
		this.playerList = [];
		this.levels = [];
		this.levelDefault = null;
	}

	getName(){
		// Needs Pointer
		return null;
	}

	isRunning(){
		return this.isRunning;
	}

	getPocketMineVersion(){
		// Needs Pointer
		return null;
	}

	getVersion(){
		return pocketmine["ProtocolInfo"]["MINECRAFT_VERSION"];
	}

	getAPIVersion(){
		// Needs Pointer
		return null;
	}

	getFilePath(){
		return process.cwd();
	}

	getResourcePath(){
		// Needs Pointer
		return null
	}

	getDataPath(){
		return this.dataPath;
	}

	getPluginPath(){
		return this.pluginPath;
	}

	getMaxPlayers(){
		return this.maxPlayers;
	}

	getOnlineMode(){
		return this.onlineMode;
	}

	requiresAuthentication(){
		return getOnlineMode();
	}

	getPort(){
		return getConfigInt("server-port");
	}

	getViewDistance(){
		// Need to be careful that getconfigInt returns numbers in array.
		let array = [2]
		let newvalues = getConfigInt("view-distance");
		return Math.max(array.concat[newvalues]);
	}

	getAllowedViewDistance(interger){
		// Need to revist, memoryManager seems to have control over memory usage, may have to replace it with v8 GC memory usage/ ~ process.memory
		//let array = [2]
		//let newvalues = memoryManager[]

	}

	getPublicIP(){
		let pip = getConfigString("server-ip")
		return pip !== "" ? pip : "0.0.0.0"
	}

	getServerUniqueID(){
		// Random for now.
		return uuidv4();
	}

	getAutoSave(){
		return autoSave();
	}

	setAutoSave(boolean){
		// Global for now until I determine the implications of different states of autosaves.
		let ast = autoSave(boolean)
		let gsl = getLevels();
		for(var i = 0; i < gsl.length; i++){
			// Need to determine what we are actually changing file wise.
		}
	}

	getGamemodeString(interger){
		let strobj = ["%gameMode.survival","%gameMode.creative","%gameMode.adventure","%gameMode.spectator"]
		return interger <= (strobj.length - 1) ? strobj[interger] : new Error("Invalid Gamemode")
	}

	getGameModeName(interger){
		let strobj = ["Survival","Creative","Adventure","Spectator"]
		return interger <= (strobj.length - 1) ? strobj[interger] : new Error("Invalid Gamemode")
	}

	getGamemodeFromString(string){
        var returnvalue;


        // Benchmark: Switch against  IF =>  IF: 0.078ms, SWITCH: 0.029ms, therefore Switch will be used. Unit test in /playground/

        switch(string){
             case "survival":{returnvalue = 0;break;}
             case "s":{returnvalue = 0;break;}

             case "creative":{returnvalue = 1;break;}
             case "c":{returnvalue = 1;break;}

             case "adventure":{returnvalue = 2;break;} 
             case "a":{returnvalue = 2;break;}

             case "spectator":{returnvalue = 3;break;} 
             case "v":{returnvalue = 3;break;}
             case "view":{returnvalue = 3;break;}

             default:{returnvalue = -1;}       
        }

		return returnvalue

	}

	getDifficulty(){
		return getConfigInt("difficulty");
	}

	hasWhitelist(){
		return getConfigInt("white-list");
	}

	getSpawnRadius(){
		return getConfigInt("spawn-protection");
	}

	getEntityMetaData(){
		return this.entityMetadata;
	}

	getLevelMetaData(){
		return this.levelMetadata;
	}

	getCraftingManager(){
		return this.craftingManager;
	}

	getTick(){
		return this.tickCounter;
	}

	getTicksPerSecond(){
		return (this.currentTPS + 0.5) << 0;
	}

	getTicksPerSecondAverage(){
		return ((this.tickAverage.reduce((a,b) => a+b,0))/this.tickAverage.length)
	}

	getTicksUsage(){
		return (Math.round(this.currentUse * 100) / 100)
	}

	getTicksUsageAverage(){
		return (Math.round(((this.tickAverage.reduce((a,b) => a+b,0))/this.tickAverage.length) * 100) / 100)
	}

	getCommandMap(){
		return this.commandMap
	}

	getOnlinePlayers(){
		return this.playerList
	}

	shouldSavePlayerData(){
		// Todo
		//		return getProperty("")
	}

	getOfflinePlayer(string){
		let name = string.toLowerCase();
		let result = this.getPlayerExact(name);

		if(result === null){
			// result = new OfflinePlayer(this, name)
		}
		return result;
	}

	getPlayerDataPath(string){
		let dp = this.getDataPath()
		let concat = dp + '/players/' + string.toLowerCase() + '.dat';
		return concat;
	}

	async hasOfflinePlayerData(string){
		let filepath = await getPlayerDataPath(string)
		return fs.access(filepath, fs.constants.F_OK, (err) => {
			return (err ? false : true)
		})
	}

	async getOfflinePlayerData(string){
		let name = string.toLowerCase()
		let filepath = await getPlayerDataPath(string)
		let hasOffline = await hasOfflinePlayerData(string)
		if(shouldSavePlayerData()){
			if(hasOffline){

			}
		}
	}

}