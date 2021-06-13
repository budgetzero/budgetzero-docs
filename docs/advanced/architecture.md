---
sidebar_position: 0
---

# Architecture

## Summary

budgetzero is writen in JavaScript with the [vuejs](https://vuejs.org/) framework.  

All data is stored client-side within the browser using [PouchDB](https://pouchdb.com/). The desktop apps are built using (Electron)[https://www.electronjs.org/] and are functionally the same as using the browser verison.

## Syncing

There is currently no officially-hosted method of syncing data across devices and/or browsers. 

You can self-host a sync server by following the [self-hosted sync server instructions](sync-server)

## Data Format

The data stored within budgetzero is compatible with the awesome open-source [financier](https://gitlab.com/financier/financier) app. Data is stored as JSON-format documents within the PouchDB NoSQL database. 

These documents have the following schema:

### Budget Root

The ```_id``` field is of the format ```budget_{budgetID}```, where ```{budgetID}``` is a [uuid](https://www.npmjs.com/package/uuidv4) shared across all documents within that budget. 

```
{
    "name":"empty_budget",
    "currency":"USD",
    "created":"2021-06-13T14:53:47.028Z",
    "checkNumber":false,
    "_id":"budget_d9a8045f-8f05-4c53-b900-6586189c65bf",
}
```

### Budget Opened

The ```_id``` field is of the format ```budget-opened_{budgetID}```, where ```{budgetID}``` is a [uuid](https://www.npmjs.com/package/uuidv4) shared across all documents within that budget. 

```
{
    "opened":"2021-06-13T14:53:47.028Z",
    "_id":"budget-opened_d9a8045f-8f05-4c53-b900-6586189c65bf",
}
```

### Account

The ```_id``` field is of the format ```b_{budgetID}_account_{accountID}```.

```
{
    "type":"CHECKING",
    "checkNumber":true,
    "closed":false,
    "name":"TestAccount",
    "note":null,
    "sort":0,
    "onBudget":true,
    "balanceIsNegative":false,
    "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_account_f171f6f0-2f5c-49d9-8308-45c756a07d08"
}
```


### Master Category

The ```_id``` field is of the format ```b_{budgetID}_master-category_{masterCategoryID}```.

```
{
    "name":"Giving",
    "sort":1,
    "collapsed":false,
    "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_master-category_115ac17a-c436-4517-9308-553ac0c92d4d"
}
```

### Category
The ```_id``` field is of the format ```b_{budgetID}_category_{categoryID}```.

```
{
    "name":"Fuel",
    "hidden":false,
    "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
    "sort":0,
    "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_01db6a1f-ba55-42f7-9e9b-26bed09ddc7e"
}
```

### Budget Amount

The ```_id``` field is of the format ```b_{budgetID}_category_{m_categoryID}```.

```
{
    "budget":2000,
    "overspending":null,
    "note":"",
    "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_m_category_2021-06-01_01db6a1f-ba55-42f7-9e9b-26bed09ddc7e"
}
```

### Payee

The ```_id``` field is of the format ```b_{budgetID}_payee_{payeeID}```.

```
{
      "name":"TestPayee",
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_payee_9d41ed14-d1a1-4e69-84de-00e1f20b81d1"
}
```

### Transaction

The ```_id``` field is of the format ```b_{budgetID}_transaction_{transactionID}```.

```
{
    "account":"f171f6f0-2f5c-49d9-8308-45c756a07d08",
    "category":"01db6a1f-ba55-42f7-9e9b-26bed09ddc7e",
    "cleared":true,
    "approved":true,
    "value":-4000,
    "date":"2021-06-13",
    "memo":"",
    "reconciled":false,
    "flag":"#ffffff",
    "payee":"9d41ed14-d1a1-4e69-84de-00e1f20b81d1",
    "transfer":null,
    "splits":[
        
    ],
    "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_transaction_2227874d-f35d-4fdf-836c-9f70604e60f0"
}
```


## Example Budget

Here is an example of a working budget file.

```
[
   {
      "type":"CHECKING",
      "checkNumber":true,
      "closed":false,
      "name":"TestAccount",
      "note":null,
      "sort":0,
      "onBudget":true,
      "balanceIsNegative":false,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_account_f171f6f0-2f5c-49d9-8308-45c756a07d08"
   },
   {
      "name":"Fuel",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_01db6a1f-ba55-42f7-9e9b-26bed09ddc7e"
   },
   {
      "name":"Retirement",
      "hidden":false,
      "masterCategory":"d6968fd5-3ea3-4b15-8c7d-ae9e5dc2c72f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_06375854-bf66-495b-a2a6-de9065ded8a2"
   },
   {
      "name":"Groceries",
      "hidden":false,
      "masterCategory":"94cc22e1-a012-400f-b325-2f809347b828",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_0ab0585a-57dc-4c3b-a6f4-6ac3bcc0bb23"
   },
   {
      "name":"Household Goods",
      "hidden":false,
      "masterCategory":"94cc22e1-a012-400f-b325-2f809347b828",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_0b69b136-0f8b-4a82-b431-bcb8b587e9ea"
   },
   {
      "name":"Water",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_0d590514-89bc-4944-bd97-22257bceb4ea"
   },
   {
      "name":"Christmas",
      "hidden":false,
      "masterCategory":"d6968fd5-3ea3-4b15-8c7d-ae9e5dc2c72f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_20a311d6-a08c-4cad-a98c-6e4871db8384"
   },
   {
      "name":"Electricity",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_22732a9f-1a23-4d6e-94e6-88214179ae38"
   },
   {
      "name":"Clothing",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_2fc75486-eb17-496d-96c1-8bf92f459f4b"
   },
   {
      "name":"Vacation",
      "hidden":false,
      "masterCategory":"d6968fd5-3ea3-4b15-8c7d-ae9e5dc2c72f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_30653f4b-4a70-4130-b320-4672cee60211"
   },
   {
      "name":"Birthdays",
      "hidden":false,
      "masterCategory":"d6968fd5-3ea3-4b15-8c7d-ae9e5dc2c72f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_42df5d4c-7ce1-426b-9a0b-47740a004203"
   },
   {
      "name":"Emergency Fund",
      "hidden":false,
      "masterCategory":"d6968fd5-3ea3-4b15-8c7d-ae9e5dc2c72f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_593256f8-af2b-4616-b306-606912fa5071"
   },
   {
      "name":"Renters Insurance",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_64acf63a-2a3a-4b84-b265-37d19a9528fc"
   },
   {
      "name":"Car Payment",
      "hidden":false,
      "masterCategory":"a5d04093-b435-49c2-aa62-6ed14ef1ae2f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_6f38a560-943c-4726-a470-e1ef6a21d5eb"
   },
   {
      "name":"Tithing",
      "hidden":false,
      "masterCategory":"115ac17a-c436-4517-9308-553ac0c92d4d",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_7f4220f7-ef21-4d03-aded-bf19c537b5e6"
   },
   {
      "name":"Spending Money",
      "hidden":false,
      "masterCategory":"94cc22e1-a012-400f-b325-2f809347b828",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_805f3bb0-e962-4cd2-a5a6-74ce995ced46"
   },
   {
      "name":"Car Insurance",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_80cbfed4-f73e-40c2-ae3c-674a99a36c24"
   },
   {
      "name":"Medical/Dental",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_84845b50-0df6-489f-83cc-4c0b3eb71a8e"
   },
   {
      "name":"Student Loan Payment",
      "hidden":false,
      "masterCategory":"a5d04093-b435-49c2-aa62-6ed14ef1ae2f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_853bb4a3-c2fd-43f7-b02d-5db684c33deb"
   },
   {
      "name":"Cable TV",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_89672262-ccce-4f79-90a1-4a5675d8c141"
   },
   {
      "name":"Rainy Day Funds",
      "hidden":false,
      "masterCategory":"d6968fd5-3ea3-4b15-8c7d-ae9e5dc2c72f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_8fdee0bd-b7bf-4a57-9951-d15bb09a0253"
   },
   {
      "name":"Charitable",
      "hidden":false,
      "masterCategory":"115ac17a-c436-4517-9308-553ac0c92d4d",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_9c67d785-a775-4544-9ec9-c41e6ce06522"
   },
   {
      "name":"Internet",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_9da0b721-1501-40c7-9bdc-8209ad1f3f13"
   },
   {
      "name":"Rent/Mortgage",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_be062140-deb8-458d-95d6-f7239aa9917d"
   },
   {
      "name":"Car Maintenance",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_c0482183-df1b-4143-a058-587cb5a2ff7c"
   },
   {
      "name":"Restaurants",
      "hidden":false,
      "masterCategory":"94cc22e1-a012-400f-b325-2f809347b828",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_e5d78b23-5daa-460c-8671-c34bb39d4546"
   },
   {
      "name":"Car Replacement",
      "hidden":false,
      "masterCategory":"d6968fd5-3ea3-4b15-8c7d-ae9e5dc2c72f",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_e6743e98-f024-411b-bee3-6d02f8fd55eb"
   },
   {
      "name":"Phone",
      "hidden":false,
      "masterCategory":"2bd2d6f5-b24c-4702-8889-845d246bd577",
      "sort":0,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_category_ec24c91c-3ff7-498c-9b9b-eed7613ec0d4"
   },
   {
      "budget":2000,
      "overspending":null,
      "note":"",
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_m_category_2021-06-01_01db6a1f-ba55-42f7-9e9b-26bed09ddc7e"
   },
   {
      "name":"Giving",
      "sort":1,
      "collapsed":false,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_master-category_115ac17a-c436-4517-9308-553ac0c92d4d"
   },
   {
      "name":"Monthly Bills",
      "sort":1,
      "collapsed":false,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_master-category_2bd2d6f5-b24c-4702-8889-845d246bd577"
   },
   {
      "name":"Everyday Expenses",
      "sort":1,
      "collapsed":false,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_master-category_94cc22e1-a012-400f-b325-2f809347b828"
   },
   {
      "name":"Debt",
      "sort":1,
      "collapsed":false,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_master-category_a5d04093-b435-49c2-aa62-6ed14ef1ae2f"
   },
   {
      "name":"Savings Goals",
      "sort":1,
      "collapsed":false,
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_master-category_d6968fd5-3ea3-4b15-8c7d-ae9e5dc2c72f"
   },
   {
      "name":"TestPayee",
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_payee_9d41ed14-d1a1-4e69-84de-00e1f20b81d1"
   },
   {
      "account":"f171f6f0-2f5c-49d9-8308-45c756a07d08",
      "category":"01db6a1f-ba55-42f7-9e9b-26bed09ddc7e",
      "cleared":true,
      "approved":true,
      "value":-4000,
      "date":"2021-06-13",
      "memo":"",
      "reconciled":false,
      "flag":"#ffffff",
      "payee":"9d41ed14-d1a1-4e69-84de-00e1f20b81d1",
      "transfer":null,
      "splits":[
         
      ],
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_transaction_2227874d-f35d-4fdf-836c-9f70604e60f0"
   },
   {
      "account":"f171f6f0-2f5c-49d9-8308-45c756a07d08",
      "category":null,
      "cleared":true,
      "approved":true,
      "value":100000,
      "date":"2011-11-11",
      "memo":null,
      "reconciled":true,
      "flag":"#ffffff",
      "payee":"---------------------initial-balance",
      "transfer":null,
      "splits":[
         
      ],
      "_id":"b_d9a8045f-8f05-4c53-b900-6586189c65bf_transaction_3fdef529-8aed-4946-bb1a-94ca61b2b420"
   },
   {
      "name":"empty_budget",
      "currency":"USD",
      "created":"2021-06-13T14:53:47.028Z",
      "checkNumber":false,
      "_id":"budget_d9a8045f-8f05-4c53-b900-6586189c65bf",
      "short_id":"d9a8045f-8f05-4c53-b900-6586189c65bf"
   },
   {
      "opened":"2021-06-13T14:53:47.028Z",
      "_id":"budget-opened_d9a8045f-8f05-4c53-b900-6586189c65bf",
      "short_id":"d9a8045f-8f05-4c53-b900-6586189c65bf"
   }
]
```