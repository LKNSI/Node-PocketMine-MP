
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