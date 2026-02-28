# GoodsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGood**](#creategood) | **POST** /warehouses/{warehouseId}/goods | Create a new good in a warehouse|
|[**findAllGoods**](#findallgoods) | **GET** /warehouses/{warehouseId}/goods | List goods for a warehouse|
|[**findOneGood**](#findonegood) | **GET** /warehouses/{warehouseId}/goods/{id} | Get a specific good by id|
|[**removeGood**](#removegood) | **DELETE** /warehouses/{warehouseId}/goods/{id} | Delete a specific good by id|
|[**updateGood**](#updategood) | **PATCH** /warehouses/{warehouseId}/goods/{id} | Update a specific good by id|

# **createGood**
> GoodResponseDto createGood(createGoodDto)


### Example

```typescript
import {
    GoodsApi,
    Configuration,
    CreateGoodDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GoodsApi(configuration);

let warehouseId: string; // (default to undefined)
let createGoodDto: CreateGoodDto; //

const { status, data } = await apiInstance.createGood(
    warehouseId,
    createGoodDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGoodDto** | **CreateGoodDto**|  | |
| **warehouseId** | [**string**] |  | defaults to undefined|


### Return type

**GoodResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Good created successfully. |  -  |
|**400** | Bad Request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findAllGoods**
> PaginatedGoodResponseDto findAllGoods()


### Example

```typescript
import {
    GoodsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GoodsApi(configuration);

let warehouseId: string; // (default to undefined)
let page: number; //Page number for pagination (optional) (default to undefined)
let limit: number; //Number of items per page (optional) (default to undefined)
let search: string; //Search term for goods (optional) (default to undefined)

const { status, data } = await apiInstance.findAllGoods(
    warehouseId,
    page,
    limit,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|
| **page** | [**number**] | Page number for pagination | (optional) defaults to undefined|
| **limit** | [**number**] | Number of items per page | (optional) defaults to undefined|
| **search** | [**string**] | Search term for goods | (optional) defaults to undefined|


### Return type

**PaginatedGoodResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Goods retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findOneGood**
> GoodResponseDto findOneGood()


### Example

```typescript
import {
    GoodsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GoodsApi(configuration);

let warehouseId: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.findOneGood(
    warehouseId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GoodResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Good retrieved successfully. |  -  |
|**404** | Good not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeGood**
> removeGood()


### Example

```typescript
import {
    GoodsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GoodsApi(configuration);

let warehouseId: string; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.removeGood(
    warehouseId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **warehouseId** | [**string**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Good deleted successfully. |  -  |
|**404** | Good not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGood**
> GoodResponseDto updateGood(updateGoodDto)


### Example

```typescript
import {
    GoodsApi,
    Configuration,
    UpdateGoodDto
} from './api';

const configuration = new Configuration();
const apiInstance = new GoodsApi(configuration);

let warehouseId: string; // (default to undefined)
let id: string; // (default to undefined)
let updateGoodDto: UpdateGoodDto; //

const { status, data } = await apiInstance.updateGood(
    warehouseId,
    id,
    updateGoodDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGoodDto** | **UpdateGoodDto**|  | |
| **warehouseId** | [**string**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GoodResponseDto**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Good updated successfully. |  -  |
|**400** | Bad Request. |  -  |
|**404** | Good not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

