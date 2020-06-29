import cache, { CacheClass } from 'memory-cache';
import mockDummyData from '../__mocks__/dummyData.json';

let memoryCache: CacheClass<string, object>;
const CACHE_KEY_DUMMY_DATA = "dummy-data";

export default class DummyDataService {
    static init() {
        memoryCache = new cache.Cache();
        memoryCache.put(CACHE_KEY_DUMMY_DATA, DummyDataService.getDummyData());
    }

    static getDummyDataByCity(city: string) {
        const dummyData = DummyDataService.getDummyData() as Array<{
            city: string;
        }>;
      
        const result = dummyData.filter(item => {
            return item.city === city;
        });
    
        return result;
    }

    static getDummyDataById(id: number) {
        const dummyData = DummyDataService.getDummyData() as Array<{
            id: number,
            name: string;
        }>;
      
        const result = dummyData.filter(item => {
            return item.id === id;
        });
    
        return result;
    }

    private static getDummyData() {
        return mockDummyData;
    }
}
