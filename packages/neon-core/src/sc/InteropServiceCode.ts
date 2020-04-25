export enum InteropServiceCode {
  NEO_ACCOUNT_ISSTANDARD = "b542794c",
  NEO_CONTRACT_CREATE = "f66ca56e",
  NEO_CONTRACT_GETSCRIPT = "791581b6",
  NEO_CONTRACT_ISPAYABLE = "77fd08c8",
  NEO_CONTRACT_UPDATE = "0b5eb3e3",
  NEO_CRYPTO_CHECKMULTISIG = "c7c34cba",
  NEO_CRYPTO_ECDSAVERIFY = "0a906ad4",
  NEO_ENUMERATOR_CONCAT = "3eae34cb",
  NEO_ENUMERATOR_CREATE = "4eaada58",
  NEO_ENUMERATOR_NEXT = "42298fe0",
  NEO_ENUMERATOR_VALUE = "ab5b018e",
  NEO_HEADER_GETMERKLEROOT = "15d6cc1b",
  NEO_HEADER_GETNEXTCONSENSUS = "b57e5b55",
  NEO_HEADER_GETVERSION = "d0d84bd9",
  NEO_ITERATOR_CONCAT = "8e4d5e12",
  NEO_ITERATOR_CREATE = "24ef3dbf",
  NEO_ITERATOR_KEY = "813425bc",
  NEO_ITERATOR_KEYS = "0aef6adf",
  NEO_ITERATOR_VALUES = "257e13d9",
  NEO_JSON_DESERIALIZE = "0b6ebcb4",
  NEO_JSON_SERIALIZE = "5c2159c7",
  NEO_NATIVE_DEPLOY = "123e7fe8",
  NEO_NATIVE_POLICY = "75f4fa6b",
  NEO_NATIVE_TOKENS_GAS = "eb43f4f4",
  NEO_NATIVE_TOKENS_NEO = "45c49284",
  NEO_STORAGE_FIND = "881908e9",
  NEO_TRANSACTION_GETSCRIPT = "5000b5d5",
  NEO_TRANSACTION_GETWITNESSES = "f70147d8",
  NEO_WITNESS_GETVERIFICATIONSCRIPT = "efcaaa6d",

  SYSTEM_BLOCK_GETTRANSACTION = "362b8107",
  SYSTEM_BLOCK_GETTRANSACTIONCOUNT = "14d36a25",
  SYSTEM_BLOCK_GETTRANSACTIONS = "c0d9af6f",
  SYSTEM_BLOCKCHAIN_GETBLOCK = "8347922d",
  SYSTEM_BLOCKCHAIN_GETCONTRACT = "a9c54b41",
  SYSTEM_BLOCKCHAIN_GETHEADER = "74445bf6",
  SYSTEM_BLOCKCHAIN_GETHEIGHT = "7ef5721f",
  SYSTEM_BLOCKCHAIN_GETTRANSACTION = "e6558d48",
  SYSTEM_BLOCKCHAIN_GETTRANSACTIONHEIGHT = "4a3288b1",
  SYSTEM_CONTRACT_CALL = "627d5b52",
  SYSTEM_CONTRACT_DESTROY = "c69f1df0",
  SYSTEM_CRYPTO_VERIFY = "de789769",
  SYSTEM_EXECUTIONENGINE_GETCALLINGSCRIPTHASH = "45995a5c",
  SYSTEM_EXECUTIONENGINE_GETENTRYSCRIPTHASH = "1d59e119",
  SYSTEM_EXECUTIONENGINE_GETEXECUTINGSCRIPTHASH = "87c3d264",
  SYSTEM_EXECUTIONENGINE_GETSCRIPTCONTAINER = "9a1f194a",
  SYSTEM_HEADER_GETHASH = "b80639a1",
  SYSTEM_HEADER_GETINDEX = "de2e7958",
  SYSTEM_HEADER_GETPREVHASH = "fabe7210",
  SYSTEM_HEADER_GETTIMESTAMP = "15abc264",
  SYSTEM_RUNTIME_CHECKWITNESS = "f827ec8c",
  SYSTEM_RUNTIME_DESERIALIZE = "dfedd7bf",
  SYSTEM_RUNTIME_GETINVOCATIONCOUNTER = "84271143",
  SYSTEM_RUNTIME_GETNOTIFICATIONS = "274335f1",
  SYSTEM_RUNTIME_GETTIME = "b7c38803",
  SYSTEM_RUNTIME_GETTRIGGER = "e97d38a0",
  SYSTEM_RUNTIME_LOG = "cfe74796",
  SYSTEM_RUNTIME_NOTIFY = "95016f61",
  SYSTEM_RUNTIME_PLATFORM = "b279fcf6",
  SYSTEM_RUNTIME_SERIALIZE = "ee83bbc8",
  SYSTEM_STORAGE_DELETE = "2f58c5ed",
  SYSTEM_STORAGE_GET = "925de831",
  SYSTEM_STORAGE_GETCONTEXT = "9bf667ce",
  SYSTEM_STORAGE_GETREADONLYCONTEXT = "f6b46be2",
  SYSTEM_STORAGE_PUT = "e63f1884",
  SYSTEM_STORAGE_PUTEX = "73e19b3a",
  SYSTEM_STORAGECONTEXT_ASREADONLY = "1abdce13",
  SYSTEM_TRANSACTION_GETHASH = "ba9e3027"
}

export default InteropServiceCode;
