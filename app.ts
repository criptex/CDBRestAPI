import { MongoMarketDataProvider } from "./databases/mongo/MongoMarketDataProvider";
import {Sqlite3MarketDataProvider } from "./databases/sqlite3/Sqlite3MarketDataProvider";
import { MarketDataProviderProxy } from "./services/MarketDataProviderProxy";
import { RequestBroker } from "./services/RequestBroker";
import { CDBCalcService } from "./services/CDBCalcService";
import { TestMarketDataProvider } from "./tests/TestMarketDataProvider";

var marketDataProviderProxy = new MarketDataProviderProxy(new MongoMarketDataProvider(), new Sqlite3MarketDataProvider());

var requestBroker = new RequestBroker(new CDBCalcService(marketDataProviderProxy));
requestBroker.start();