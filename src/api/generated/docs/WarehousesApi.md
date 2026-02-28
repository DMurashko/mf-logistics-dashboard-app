# WarehousesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createWarehouse**](#createwarehouse) | **POST** /warehouses | Create a new warehouse|
|[**findAllWarehouses**](#findallwarehouses) | **GET** /warehouses | List all warehouses|
|[**findOneWarehouse**](#findonewarehouse) | **GET** /warehouses/{id} | Get a specific warehouse by id|
|[**removeWarehouse**](#removewarehouse) | **DELETE** /warehouses/{id} | Delete a specific warehouse by id|
|[**updateWarehouse**](#updatewarehouse) | **PATCH** /warehouses/{id} | Update a specific warehouse by id|

# **createWarehouse**
> createWarehouse(createWarehouseDto)


### Example

```typescript
import {
    WarehousesApi,
    Configuration,
    CreateWarehouseDto
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let createWarehouseDto: CreateWarehouseDto; //

const { status, data } = await apiInstance.createWarehouse(
    createWarehouseDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWarehouseDto** | **CreateWarehouseDto**|  | |


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Warehouse created successfully. |  -  |
|**400** | Bad Request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findAllWarehouses**
> findAllWarehouses()


### Example

```typescript
import {
    WarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let page: number; //Page number for pagination (optional) (default to undefined)
let limit: number; //Number of items per page (optional) (default to undefined)
let search: string; //Search term for warehouses (optional) (default to undefined)

const { status, data } = await apiInstance.findAllWarehouses(
    page,
    limit,
    search
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Page number for pagination | (optional) defaults to undefined|
| **limit** | [**number**] | Number of items per page | (optional) defaults to undefined|
| **search** | [**string**] | Search term for warehouses | (optional) defaults to undefined|


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
|**200** | Warehouses retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **findOneWarehouse**
> findOneWarehouse()


### Example

```typescript
import {
    WarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.findOneWarehouse(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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
|**200** | Warehouse retrieved successfully. |  -  |
|**404** | Warehouse not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **removeWarehouse**
> removeWarehouse()


### Example

```typescript
import {
    WarehousesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.removeWarehouse(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
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
|**204** | Warehouse deleted successfully. |  -  |
|**404** | Warehouse not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWarehouse**
> updateWarehouse(updateWarehouseDto)


### Example

```typescript
import {
    WarehousesApi,
    Configuration,
    UpdateWarehouseDto
} from './api';

const configuration = new Configuration();
const apiInstance = new WarehousesApi(configuration);

let id: string; // (default to undefined)
let updateWarehouseDto: UpdateWarehouseDto; //

const { status, data } = await apiInstance.updateWarehouse(
    id,
    updateWarehouseDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWarehouseDto** | **UpdateWarehouseDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Warehouse updated successfully. |  -  |
|**400** | Bad Request. |  -  |
|**404** | Warehouse not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

