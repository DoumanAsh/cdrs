var searchIndex = {};
searchIndex["cdrs"] = {"doc":"**cdrs** is a native Cassandra DB client written in Rust. It&#39;s under a hard development as of now.","items":[[0,"frame","cdrs","`frame` module contains general Frame functionality.",null,null],[3,"Frame","cdrs::frame","",null,null],[12,"version","","",0,null],[12,"flags","","",0,null],[12,"opcode","","",0,null],[12,"stream","","",0,null],[12,"body","","",0,null],[4,"Version","","Frame&#39;s version",null,null],[13,"Request","","",1,null],[13,"Response","","",1,null],[4,"Flag","","Frame&#39;s flag",null,null],[13,"Compression","","",2,null],[13,"Tracing","","",2,null],[13,"CustomPayload","","",2,null],[13,"Warning","","",2,null],[13,"Ignore","","",2,null],[4,"Opcode","","",null,null],[13,"Error","","",3,null],[13,"Startup","","",3,null],[13,"Ready","","",3,null],[13,"Authenticate","","",3,null],[13,"Options","","",3,null],[13,"Supported","","",3,null],[13,"Query","","",3,null],[13,"Result","","",3,null],[13,"Prepare","","",3,null],[13,"Execute","","",3,null],[13,"Register","","",3,null],[13,"Event","","",3,null],[13,"Batch","","",3,null],[13,"AuthChallenge","","",3,null],[13,"AuthResponse","","",3,null],[13,"AuthSuccess","","",3,null],[0,"frame_auth_challenge","","",null,null],[3,"BodyResAuthChallenge","cdrs::frame::frame_auth_challenge","A server authentication challenge.",null,null],[12,"data","","",4,null],[11,"fmt","","",4,null],[11,"from_cursor","","",4,{"inputs":[{"name":"cursor"}],"output":{"name":"bodyresauthchallenge"}}],[0,"frame_auth_response","cdrs::frame","",null,null],[3,"BodyReqAuthResponse","cdrs::frame::frame_auth_response","",null,null],[11,"fmt","","",5,null],[11,"new","","",5,{"inputs":[{"name":"cbytes"}],"output":{"name":"bodyreqauthresponse"}}],[11,"into_cbytes","","",5,null],[11,"new_req_auth_response","cdrs::frame","Creates new frame of type `AuthResponse`.",0,{"inputs":[{"name":"vec"}],"output":{"name":"frame"}}],[0,"frame_auth_success","","",null,null],[3,"BodyReqAuthSuccess","cdrs::frame::frame_auth_success","`BodyReqAuthSuccess` is a frame that represents a successfull authentication response.",null,null],[11,"fmt","","",6,null],[11,"from_cursor","","",6,{"inputs":[{"name":"cursor"}],"output":{"name":"bodyreqauthsuccess"}}],[0,"frame_authenticate","cdrs::frame","",null,null],[3,"BodyResAuthenticate","cdrs::frame::frame_authenticate","A server authentication challenge.",null,null],[12,"data","","",7,null],[11,"fmt","","",7,null],[11,"from_cursor","","",7,{"inputs":[{"name":"cursor"}],"output":{"name":"bodyresauthenticate"}}],[0,"frame_execute","cdrs::frame","",null,null],[3,"BodyReqExecute","cdrs::frame::frame_execute","The structure that represents a body of a frame of type `execute`.",null,null],[11,"new","","The method which creates new instance of `BodyReqExecute`",8,{"inputs":[{"name":"cbytesshort"},{"name":"paramsreqquery"}],"output":{"name":"bodyreqexecute"}}],[11,"into_cbytes","","",8,null],[11,"new_req_execute","cdrs::frame","**Note:** This function should be used internally for building query request frames.",0,{"inputs":[{"name":"cbytesshort"},{"name":"paramsreqquery"}],"output":{"name":"frame"}}],[0,"frame_options","","",null,null],[3,"BodyReqOptions","cdrs::frame::frame_options","The structure which represents a body of a frame of type `options`.",null,null],[11,"new","","Creates new body of a frame of type `options`",9,{"inputs":[],"output":{"name":"bodyreqoptions"}}],[11,"into_cbytes","","",9,null],[11,"new_req_options","cdrs::frame","Creates new frame of type `options`.",0,{"inputs":[],"output":{"name":"frame"}}],[0,"frame_prepare","","",null,null],[3,"BodyReqPrepare","cdrs::frame::frame_prepare","Struct that represents a body of a frame of type `prepare`",null,null],[11,"new","","Creates new body of a frame of type `prepare` that prepares query `query`.",10,{"inputs":[{"name":"string"}],"output":{"name":"bodyreqprepare"}}],[11,"into_cbytes","","",10,null],[11,"new_req_prepare","cdrs::frame","**Note:** This function should be used internally for building query request frames.",0,{"inputs":[{"name":"string"}],"output":{"name":"frame"}}],[0,"frame_query","","Contains Query Frame related functionality.",null,null],[3,"BodyReqQuery","cdrs::frame::frame_query","Structure which represents body of Query request",null,null],[12,"query","","Query string.",11,null],[12,"query_params","","Query parameters.",11,null],[3,"ParamsReqQuery","","Parameters of Query request.",null,null],[12,"consistency","","Cassandra consistency level.",12,null],[12,"flags","","Array of query flags.",12,null],[12,"values","","Array of values.",12,null],[12,"page_size","","Page size.",12,null],[12,"paging_state","","Array of bytes which represents paging state.",12,null],[12,"serial_consistency","","Serial `Consistency`.",12,null],[12,"timestamp","","Timestamp.",12,null],[4,"QueryFlags","","Cassandra Query Flags.",null,null],[13,"Value","","If set indicates that Query Params contains value.",13,null],[13,"SkipMetadata","","If set indicates that Query Params does not contain metadata.",13,null],[13,"PageSize","","If set indicates that Query Params contains page size.",13,null],[13,"WithPagingState","","If set indicates that Query Params contains paging state.",13,null],[13,"WithSerialConsistency","","If set indicates that Query Params contains serial consistency.",13,null],[13,"WithDefaultTimestamp","","If set indicates that Query Params contains default timestamp.",13,null],[13,"WithNamesForValues","","If set indicates that Query Params values are named ones.",13,null],[11,"new","","**Note:** shold be used by internal stuff only. Fabric function that produces Query request body.",11,{"inputs":[{"name":"string"},{"name":"consistency"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"}],"output":{"name":"bodyreqquery"}}],[11,"into_cbytes","","",11,null],[11,"set_values","","Sets values of Query request params.",12,null],[11,"into_cbytes","","",12,null],[11,"as_byte","","",13,null],[11,"new_req_query","cdrs::frame","**Note:** This function should be used internally for building query request frames.",0,{"inputs":[{"name":"string"},{"name":"consistency"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"}],"output":{"name":"frame"}}],[0,"frame_ready","","",null,null],[3,"BodyResReady","cdrs::frame::frame_ready","",null,null],[11,"new","","",14,{"inputs":[],"output":{"name":"bodyresready"}}],[11,"from","","",14,{"inputs":[{"name":"vec"}],"output":{"name":"bodyresready"}}],[11,"into_cbytes","","",14,null],[0,"frame_response","cdrs::frame","",null,null],[4,"ResponseBody","cdrs::frame::frame_response","",null,null],[13,"Error","","",15,null],[13,"Startup","","",15,null],[13,"Ready","","",15,null],[13,"Authenticate","","",15,null],[13,"Options","","",15,null],[13,"Supported","","",15,null],[13,"Query","","",15,null],[13,"Result","","",15,null],[13,"Prepare","","",15,null],[13,"Execute","","",15,null],[13,"Register","","",15,null],[13,"Event","","",15,null],[13,"Batch","","",15,null],[13,"AuthChallenge","","",15,null],[13,"AuthResponse","","",15,null],[13,"AuthSuccess","","",15,null],[11,"fmt","","",15,null],[11,"from","","",15,{"inputs":[{"name":"vec"},{"name":"opcode"}],"output":{"name":"responsebody"}}],[11,"as_rows_iter","","",15,null],[11,"as_cols","","",15,null],[11,"get_authenticator","","",15,null],[0,"frame_result","cdrs::frame","",null,null],[3,"BodyResResultVoid","cdrs::frame::frame_result","Body of a response of type Void",null,null],[3,"BodyResResultSetKeyspace","","It represents set keyspace result body. Body contains keyspace name.",null,null],[12,"body","","It contains name of keyspace that was set.",16,null],[3,"BodyResResultRows","","Structure that represents result of type [rows](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L533).",null,null],[12,"metadata","","Rows metadata",17,null],[12,"rows_count","","Number of rows.",17,null],[12,"rows_content","","From spec: it is composed of `rows_count` of rows.",17,null],[3,"RowsMetadata","","Rows metadata.",null,null],[12,"flags","","Flags. [Read more...](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L541)",18,null],[12,"columns_count","","Number of columns.",18,null],[12,"paging_state","","Paging state.",18,null],[12,"global_table_space","","`Option` that may contain global table space.",18,null],[12,"col_specs","","List of column specifications.",18,null],[3,"ColSpec","","Single column specification.",null,null],[12,"ksname","","The initial &lt;ksname&gt; is a [string] and is only present\nif the Global_tables_spec flag is NOT set",19,null],[12,"tablename","","The initial &lt;tablename&gt; is a [string] and is present\nif the Global_tables_spec flag is NOT set",19,null],[12,"name","","Column name",19,null],[12,"col_type","","Column type defined in spec in 4.2.5.2",19,null],[3,"ColTypeOption","","Cassandra option that represent column type.",null,null],[12,"id","","Id refers to `ColType`.",20,null],[3,"CUdt","","User defined type. [Read more...](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L608)",null,null],[12,"ks","","Keyspace name.",21,null],[12,"udt_name","","UDT name",21,null],[12,"descriptions","","List of pairs `(name, type)` where name is field name and type is type of field.",21,null],[3,"BodyResResultPrepared","","The structure represents a body of a response frame of type `prepared`",null,null],[12,"id","","id of prepared request",22,null],[12,"metadata","","metadata",22,null],[12,"result_metadata","","It is defined exactly the same as &lt;metadata&gt; in the Rows\ndocumentation.",22,null],[3,"PreparedMetadata","","The structure that represents metadata of prepared response.",null,null],[12,"flags","","",23,null],[12,"columns_count","","",23,null],[12,"pk_count","","",23,null],[12,"pk_indexes","","",23,null],[12,"global_table_spec","","",23,null],[12,"col_specs","","",23,null],[4,"ResultKind","","`ResultKind` is enum which represents types of result.",null,null],[13,"Void","","Void result.",24,null],[13,"Rows","","Rows result.",24,null],[13,"SetKeyspace","","Set keyspace result.",24,null],[13,"Prepared","","Prepeared result.",24,null],[13,"SchemaChange","","Schema change result.",24,null],[4,"ResResultBody","","ResponseBody is a generalized enum that represents all types of responses. Each of enum\noption wraps related body type.",null,null],[13,"Void","","Void response body. It&#39;s an empty stuct.",25,null],[13,"Rows","","Rows response body. It represents a body of response which contains rows.",25,null],[13,"SetKeyspace","","Set keyspace body. It represents a body of set_keyspace query and usually contains\na name of just set namespace.",25,null],[13,"Prepared","","Prepared response body.",25,null],[4,"RowsMetadataFlag","","Enum that represent a set of possible row metadata flags that could be set.",null,null],[13,"GlobalTableSpace","","",26,null],[13,"HasMorePages","","",26,null],[13,"NoMetadata","","",26,null],[4,"ColType","","Cassandra data types which clould be returned by a server.",null,null],[13,"Custom","","",27,null],[13,"Ascii","","",27,null],[13,"Bigint","","",27,null],[13,"Blob","","",27,null],[13,"Boolean","","",27,null],[13,"Counter","","",27,null],[13,"Decimal","","",27,null],[13,"Double","","",27,null],[13,"Float","","",27,null],[13,"Int","","",27,null],[13,"Timestamp","","",27,null],[13,"Uuid","","",27,null],[13,"Varchar","","",27,null],[13,"Varint","","",27,null],[13,"Timeuuid","","",27,null],[13,"Inet","","",27,null],[13,"Date","","",27,null],[13,"Time","","",27,null],[13,"Smallint","","",27,null],[13,"Tinyint","","",27,null],[13,"List","","",27,null],[13,"Map","","",27,null],[13,"Set","","",27,null],[13,"Udt","","",27,null],[13,"Tuple","","",27,null],[13,"Null","","",27,null],[4,"ColTypeOptionValue","","Enum that represents all possible types of `value` of `ColTypeOption`.",null,null],[13,"CString","","",28,null],[13,"ColType","","",28,null],[13,"CSet","","",28,null],[13,"CList","","",28,null],[13,"UdtType","","",28,null],[13,"CMap","","",28,null],[11,"into_cbytes","","",24,null],[11,"from_bytes","","",24,{"inputs":[{"name":"vec"}],"output":{"name":"resultkind"}}],[11,"from_cursor","","",24,{"inputs":[{"name":"cursor"}],"output":{"name":"resultkind"}}],[11,"fmt","","",25,null],[11,"parse_body","","",25,{"inputs":[{"name":"cursor"},{"name":"resultkind"}],"output":{"name":"resresultbody"}}],[11,"parse_body_from_cursor","","It retrieves `ResResultBody` from `io::Cursor` having knowledge about expected kind of result.",25,{"inputs":[{"name":"cursor"},{"name":"resultkind"}],"output":{"name":"resresultbody"}}],[11,"from_cursor","","",25,{"inputs":[{"name":"cursor"}],"output":{"name":"resresultbody"}}],[11,"fmt","","",29,null],[11,"new","","",29,{"inputs":[],"output":{"name":"bodyresresultvoid"}}],[11,"from_bytes","","",29,{"inputs":[{"name":"vec"}],"output":{"name":"bodyresresultvoid"}}],[11,"from_cursor","","",29,{"inputs":[{"name":"cursor"}],"output":{"name":"bodyresresultvoid"}}],[11,"fmt","","",16,null],[11,"new","","Factory function that takes body value and returns new instance of `BodyResResultSetKeyspace`.",16,{"inputs":[{"name":"cstring"}],"output":{"name":"bodyresresultsetkeyspace"}}],[11,"from_cursor","","",16,{"inputs":[{"name":"cursor"}],"output":{"name":"bodyresresultsetkeyspace"}}],[11,"fmt","","",17,null],[11,"nth_row_val_types","","Returns a list of tuples `(CBytes, ColType)` with value and type of values respectively.\n`n` is a number of row.",17,null],[11,"from_cursor","","",17,{"inputs":[{"name":"cursor"}],"output":{"name":"bodyresresultrows"}}],[11,"fmt","","",18,null],[11,"clone","","",18,null],[11,"from_cursor","","",18,{"inputs":[{"name":"cursor"}],"output":{"name":"rowsmetadata"}}],[11,"has_global_table_space","","Shows if provided flag contains GlobalTableSpace rows metadata flag",26,{"inputs":[{"name":"i32"}],"output":{"name":"bool"}}],[11,"set_global_table_space","","Sets GlobalTableSpace rows metadata flag",26,{"inputs":[{"name":"i32"}],"output":{"name":"i32"}}],[11,"has_has_more_pages","","Shows if provided flag contains HasMorePages rows metadata flag",26,{"inputs":[{"name":"i32"}],"output":{"name":"bool"}}],[11,"set_has_more_pages","","Sets HasMorePages rows metadata flag",26,{"inputs":[{"name":"i32"}],"output":{"name":"i32"}}],[11,"has_no_metadata","","Shows if provided flag contains NoMetadata rows metadata flag",26,{"inputs":[{"name":"i32"}],"output":{"name":"bool"}}],[11,"set_no_metadata","","Sets NoMetadata rows metadata flag",26,{"inputs":[{"name":"i32"}],"output":{"name":"i32"}}],[11,"into_cbytes","","",26,null],[11,"from_bytes","","",26,{"inputs":[{"name":"vec"}],"output":{"name":"rowsmetadataflag"}}],[11,"fmt","","",19,null],[11,"clone","","",19,null],[11,"parse_colspecs","","parse_colspecs tables mutable cursor, number of columns (column_count) and flags that indicates\nif Global_tables_spec is specified. It returns column_count of ColSpecs.",19,{"inputs":[{"name":"cursor"},{"name":"i32"},{"name":"bool"}],"output":{"name":"vec"}}],[11,"fmt","","",27,null],[11,"clone","","",27,null],[11,"from_bytes","","",27,{"inputs":[{"name":"vec"}],"output":{"name":"coltype"}}],[11,"from_cursor","","",27,{"inputs":[{"name":"cursor"}],"output":{"name":"coltype"}}],[11,"fmt","","",20,null],[11,"clone","","",20,null],[11,"from_cursor","","",20,{"inputs":[{"name":"cursor"}],"output":{"name":"coltypeoption"}}],[11,"fmt","","",28,null],[11,"clone","","",28,null],[11,"fmt","","",21,null],[11,"clone","","",21,null],[11,"from_cursor","","",21,{"inputs":[{"name":"cursor"}],"output":{"name":"cudt"}}],[11,"fmt","","",22,null],[11,"from_cursor","","",22,{"inputs":[{"name":"cursor"}],"output":{"name":"bodyresresultprepared"}}],[11,"fmt","","",23,null],[11,"from_cursor","","",23,{"inputs":[{"name":"cursor"}],"output":{"name":"preparedmetadata"}}],[0,"frame_startup","cdrs::frame","",null,null],[3,"BodyReqStartup","cdrs::frame::frame_startup","",null,null],[12,"map","","",30,null],[11,"new","","",30,{"inputs":[{"name":"option"}],"output":{"name":"bodyreqstartup"}}],[11,"map_len","","",30,null],[11,"num","","Number of key-value pairs",30,null],[11,"into_cbytes","","",30,null],[11,"new_req_startup","cdrs::frame","Creates new frame of type `startup`.",0,{"inputs":[{"name":"option"}],"output":{"name":"frame"}}],[0,"frame_supported","","",null,null],[3,"BodyResSupported","cdrs::frame::frame_supported","",null,null],[12,"data","","",31,null],[11,"fmt","","",31,null],[11,"from_cursor","","",31,{"inputs":[{"name":"cursor"}],"output":{"name":"bodyressupported"}}],[0,"parser","cdrs::frame","",null,null],[5,"parse_frame","cdrs::frame::parser","",null,{"inputs":[{"name":"tcpstream"},{"name":"compression"}],"output":{"name":"result"}}],[17,"VERSION_LEN","cdrs::frame","Number of version bytes in accordance to protocol.",null,null],[17,"FLAG_LEN","","Number of flag bytes in accordance to protocol.",null,null],[17,"OPCODE_LEN","","Number of opcode bytes in accordance to protocol.",null,null],[17,"STREAM_LEN","","Number of stream bytes in accordance to protocol.",null,null],[17,"LENGTH_LEN","","Number of body length bytes in accordance to protocol.",null,null],[11,"fmt","","",0,null],[11,"get_body","","",0,null],[11,"encode_with","","",0,null],[11,"into_cbytes","","",0,null],[11,"fmt","","",1,null],[11,"as_byte","","",1,null],[11,"from","","",1,{"inputs":[{"name":"vec"}],"output":{"name":"version"}}],[11,"fmt","","",2,null],[11,"eq","","",2,null],[11,"many_to_cbytes","","The method converts a serie of `Flag`-s into a single byte.",2,{"inputs":[{"name":"vec"}],"output":{"name":"u8"}}],[11,"has_compression","","Indicates if flags contains `Flag::Compression`",2,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[11,"has_tracing","","Indicates if flags contains `Flag::Tracing`",2,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[11,"has_custom_payload","","Indicates if flags contains `Flag::CustomPayload`",2,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[11,"has_warning","","Indicates if flags contains `Flag::Warning`",2,{"inputs":[{"name":"u8"}],"output":{"name":"bool"}}],[11,"as_byte","","",2,null],[11,"from","","",2,{"inputs":[{"name":"u8"}],"output":{"name":"flag"}}],[11,"fmt","","",3,null],[11,"eq","","",3,null],[11,"as_byte","","",3,null],[11,"from","","",3,{"inputs":[{"name":"u8"}],"output":{"name":"opcode"}}],[0,"types","cdrs","",null,null],[3,"CString","cdrs::types","",null,null],[3,"CStringLong","","",null,null],[3,"CStringList","","",null,null],[3,"CBytes","","The structure that represents Cassandra byte type",null,null],[3,"CBytesShort","","Cassandra short bytes",null,null],[5,"to_n_bytes","","Converts u64 numerical value into array of n bytes",null,{"inputs":[{"name":"u64"},{"name":"usize"}],"output":{"name":"vec"}}],[5,"i_to_n_bytes","","",null,{"inputs":[{"name":"i64"},{"name":"usize"}],"output":{"name":"vec"}}],[5,"try_from_bytes","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"try_u16_from_bytes","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"try_i_from_bytes","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"try_i32_from_bytes","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"try_f32_from_bytes","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"try_f64_from_bytes","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"from_bytes","","Converts byte-array into u64",null,{"inputs":[{"name":"vec"}],"output":{"name":"u64"}}],[5,"from_i_bytes","","Converts byte-array into i64",null,{"inputs":[{"name":"vec"}],"output":{"name":"i64"}}],[5,"from_u16_bytes","","Converts byte-array into u16",null,{"inputs":[{"name":"vec"}],"output":{"name":"u16"}}],[5,"to_short","","Converts number u64 into Cassandra&#39;s [short].",null,{"inputs":[{"name":"u64"}],"output":{"name":"vec"}}],[5,"to_int","","Convers integer into Cassandra&#39;s [int]",null,{"inputs":[{"name":"i64"}],"output":{"name":"vec"}}],[5,"cursor_next_value","","",null,{"inputs":[{"name":"cursor"},{"name":"u64"}],"output":{"name":"vec"}}],[0,"data_serialization_types","","",null,null],[5,"decode_custom","cdrs::types::data_serialization_types","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_ascii","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_varchar","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_bigint","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_blob","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_boolean","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_int","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_date","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_decimal","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_double","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_float","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_inet","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_timestamp","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_list","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_set","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_map","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_smallint","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_text","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_time","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_timeuuid","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_varint","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"decode_udt","","",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[0,"value","cdrs::types","",null,null],[3,"Value","cdrs::types::value","",null,null],[12,"body","","",32,null],[12,"value_type","","",32,null],[4,"ValueType","","",null,null],[13,"Normal","","",33,null],[13,"Null","","",33,null],[13,"NotSet","","",33,null],[11,"into_cbytes","","",33,null],[11,"new_normal","","",32,{"inputs":[{"name":"vec"}],"output":{"name":"value"}}],[11,"new_null","","",32,{"inputs":[],"output":{"name":"value"}}],[11,"new_not_set","","",32,{"inputs":[],"output":{"name":"value"}}],[11,"into_cbytes","","",32,null],[6,"CInt","cdrs::types","Cassandra int type.",null,null],[6,"CIntShort","","Cassandra int short type.",null,null],[17,"LONG_STR_LEN","","Cassandra types",null,null],[17,"SHORT_LEN","","",null,null],[17,"INT_LEN","","",null,null],[11,"fmt","","",34,null],[11,"clone","","",34,null],[11,"new","","",34,{"inputs":[{"name":"string"}],"output":{"name":"cstring"}}],[11,"as_str","","Converts internal value into pointer of `str`.",34,null],[11,"into_plain","","Converts internal value into a plain `String`.",34,null],[11,"into_cbytes","","Converts into Cassandra byte representation of [string]",34,null],[11,"from_cursor","","from_cursor gets Cursor who&#39;s position is set such that it should be a start of a [string].\nIt reads required number of bytes and returns a String",34,{"inputs":[{"name":"cursor"}],"output":{"name":"cstring"}}],[11,"fmt","","",35,null],[11,"clone","","",35,null],[11,"new","","",35,{"inputs":[{"name":"string"}],"output":{"name":"cstringlong"}}],[11,"as_str","","Converts internal value into pointer of `str`.",35,null],[11,"into_plain","","Converts internal value into a plain `String`.",35,null],[11,"into_cbytes","","Converts into Cassandra byte representation of [string]",35,null],[11,"from_cursor","","from_cursor gets Cursor who&#39;s position is set such that it should be a start of a [string].\nIt reads required number of bytes and returns a String",35,{"inputs":[{"name":"cursor"}],"output":{"name":"cstringlong"}}],[11,"fmt","","",36,null],[11,"clone","","",36,null],[11,"into_plain","","",36,null],[11,"from_cursor","","",36,{"inputs":[{"name":"cursor"}],"output":{"name":"cstringlist"}}],[11,"fmt","","",37,null],[11,"clone","","",37,null],[11,"new","","",37,{"inputs":[{"name":"vec"}],"output":{"name":"cbytes"}}],[11,"into_plain","","Converts `CBytes` into a plain array of bytes",37,null],[11,"from_cursor","","from_cursor gets Cursor who&#39;s position is set such that it should be a start of a [bytes].\nIt reads required number of bytes and returns a CBytes",37,{"inputs":[{"name":"cursor"}],"output":{"name":"cbytes"}}],[11,"into_cbytes","","",37,null],[11,"fmt","","",38,null],[11,"clone","","",38,null],[11,"new","","",38,{"inputs":[{"name":"vec"}],"output":{"name":"cbytesshort"}}],[11,"into_plain","","Converts `CBytesShort` into plain vector of bytes;",38,null],[11,"from_cursor","","from_cursor gets Cursor who&#39;s position is set such that it should be a start of a [bytes].\nIt reads required number of bytes and returns a CBytes",38,{"inputs":[{"name":"cursor"}],"output":{"name":"cbytesshort"}}],[11,"into_cbytes","","",38,null],[11,"from_cursor","","",39,{"inputs":[{"name":"cursor"}],"output":{"name":"cint"}}],[11,"from_cursor","","",40,{"inputs":[{"name":"cursor"}],"output":{"name":"cintshort"}}],[0,"authenticators","cdrs","",null,null],[3,"PasswordAuthenticator","cdrs::authenticators","",null,null],[8,"Authenticator","","",null,null],[10,"get_auth_token","","",41,null],[10,"get_cassandra_name","","",41,null],[11,"new","","",42,{"inputs":[{"name":"string"},{"name":"string"}],"output":{"name":"passwordauthenticator"}}],[11,"get_auth_token","","",42,null],[11,"get_cassandra_name","","",42,null],[0,"client","cdrs","",null,null],[3,"Credentials","cdrs::client","",null,null],[12,"username","","",43,null],[12,"password","","",43,null],[3,"CDRS","","",null,null],[11,"clone","","",43,null],[11,"fmt","","",43,null],[11,"new","","",44,{"inputs":[{"name":"string"},{"name":"t"}],"output":{"name":"result"}}],[11,"start","","",44,null],[11,"options","","",44,null],[11,"prepare","","",44,null],[11,"execute","","",44,null],[11,"query","","",44,null],[0,"compression","cdrs","",null,null],[4,"CompressionError","cdrs::compression","",null,null],[13,"Snappy","","",45,null],[13,"Lz4","","",45,null],[4,"Compression","","Enum which represents a type of compression. Only non-startup frame&#39;s body can be compressen.",null,null],[13,"Lz4","","[lz4](https://code.google.com/p/lz4/) compression",46,null],[13,"Snappy","","[snappy](https://code.google.com/p/snappy/) compression",46,null],[13,"None","","Non compression",46,null],[11,"fmt","","",45,null],[11,"fmt","","",46,null],[11,"eq","","",46,null],[11,"clone","","",46,null],[11,"encode","","It encodes `bytes` basing on type of compression.",46,null],[11,"decode","","It decodes `bytes` basing on type of compression.",46,null],[11,"into_string","","It transforms compression method into a string.",46,null],[11,"from","","It converts `String` into `Compression`. If string is neither `lz4` nor `snappy` then\n`Compression::None` will be returned",46,{"inputs":[{"name":"string"}],"output":{"name":"compression"}}],[11,"from","","It converts `str` into `Compression`. If string is neither `lz4` nor `snappy` then\n`Compression::None` will be returned",46,{"inputs":[{"name":"str"}],"output":{"name":"compression"}}],[0,"consistency","cdrs","The module contains Rust representation of Cassandra consistency levels.",null,null],[4,"Consistency","cdrs::consistency","`Consistency` is an enum which represents Cassandra&#39;s consistency levels.\nTo find more details about each consistency level please refer to Cassandra official docs.",null,null],[13,"Any","","",47,null],[13,"One","","",47,null],[13,"Two","","",47,null],[13,"Three","","",47,null],[13,"Quorum","","",47,null],[13,"All","","",47,null],[13,"LocalQuorum","","",47,null],[13,"EachQuorum","","",47,null],[13,"Serial","","",47,null],[13,"LocalSerial","","",47,null],[13,"LocalOne","","",47,null],[11,"fmt","","",47,null],[11,"into_cbytes","","",47,null],[11,"from","","",47,{"inputs":[{"name":"i32"}],"output":{"name":"consistency"}}],[11,"from_bytes","","",47,{"inputs":[{"name":"vec"}],"output":{"name":"consistency"}}],[11,"from_cursor","","",47,{"inputs":[{"name":"cursor"}],"output":{"name":"consistency"}}],[0,"error","cdrs","This modules contains [Cassandra&#39;s errors](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L1011)\nwhich server could respond to client.",null,null],[3,"CDRSError","cdrs::error","CDRS error which could be returned by Cassandra server as a response. As it goes\nfrom the specification it contains an error code and an error message. Apart of those\ndepending of type of error it could contain an additional information about an error.\nThis additional information is represented by `additional_info` property which is `ErrorKind`.",null,null],[12,"error_code","","`i32` that points to a type of error.",48,null],[12,"message","","Error message string.",48,null],[12,"additional_info","","Additional information.",48,null],[3,"SimpleError","","Is used if error does not contain any additional info.",null,null],[3,"UnavailableError","","Additional info about [unavailable exception](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L1025)",null,null],[12,"cl","","Consistency level of query.",49,null],[12,"required","","Number of nodes that should be available to respect `cl`.",49,null],[12,"alive","","Number of replicas that we were know to be alive.",49,null],[3,"WriteTimeoutError","","Timeout exception during a write request.",null,null],[12,"cl","","Consistency level of query.",50,null],[12,"received","","`i32` representing the number of nodes having acknowledged the request.",50,null],[12,"blockfor","","`i32` representing the number of replicas whose acknowledgement is required to achieve `cl`.",50,null],[12,"write_type","","Describes the type of the write that timed out",50,null],[3,"ReadTimeoutError","","Timeout exception during a read request.",null,null],[12,"cl","","Consistency level of query.",51,null],[12,"received","","`i32` representing the number of nodes having acknowledged the request.",51,null],[12,"blockfor","","`i32` representing the number of replicas whose acknowledgement is required to achieve `cl`.",51,null],[3,"ReadFailureError","","A non-timeout exception during a read request.",null,null],[12,"cl","","Consistency level of query.",52,null],[12,"received","","`i32` representing the number of nodes having acknowledged the request.",52,null],[12,"blockfor","","`i32` representing the number of replicas whose acknowledgement is required to achieve `cl`.",52,null],[12,"num_failures","","Represents the number of nodes that experience a failure while executing the request.",52,null],[3,"FunctionFailureError","","A (user defined) function failed during execution.",null,null],[12,"keyspace","","The keyspace of the failed function.",53,null],[12,"function","","The name of the failed function",53,null],[12,"arg_types","","`Vec&lt;CString&gt;` one string for each argument type (as CQL type) of the failed function.",53,null],[3,"WriteFailureError","","A non-timeout exception during a write request. [Read more...](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L1106)",null,null],[12,"cl","","Consistency of the query having triggered the exception.",54,null],[12,"received","","Represents the number of nodes having answered the request.",54,null],[12,"blockfor","","Represents the number of replicas whose acknowledgement is required to achieve `cl`.",54,null],[12,"num_failures","","Represents the number of nodes that experience a failure while executing the request.",54,null],[12,"write_type","","describes the type of the write that failed.",54,null],[3,"AlreadyExistsError","","The query attempted to create a keyspace or a table that was already existing.\n[Read more...](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L1140)",null,null],[12,"ks","","Represents either the keyspace that already exists,\nor the keyspace in which the table that already exists is.",55,null],[12,"table","","Represents the name of the table that already exists.",55,null],[3,"UnpreparedError","","Can be thrown while a prepared statement tries to be\nexecuted if the provided prepared statement ID is not known by\nthis host. [Read more...](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L1150)",null,null],[12,"id","","Unknown ID.",56,null],[4,"AdditionalErrorInfo","","Additional error info in accordance to [Cassandra protocol v4](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L1011).",null,null],[13,"Server","","",57,null],[13,"Protocol","","",57,null],[13,"Authentication","","",57,null],[13,"Unavailable","","",57,null],[13,"Overloaded","","",57,null],[13,"IsBootstrapping","","",57,null],[13,"Truncate","","",57,null],[13,"WriteTimeout","","",57,null],[13,"ReadTimeout","","",57,null],[13,"ReadFailure","","",57,null],[13,"FunctionFailure","","",57,null],[13,"WriteFailure","","",57,null],[13,"Syntax","","",57,null],[13,"Unauthorized","","",57,null],[13,"Invalid","","",57,null],[13,"Config","","",57,null],[13,"AlreadyExists","","",57,null],[13,"Unprepared","","",57,null],[4,"WriteType","","Describes the type of the write that failed. [Read more...](https://github.com/apache/cassandra/blob/trunk/doc/native_protocol_v4.spec#L1118)",null,null],[13,"Simple","","The write was a non-batched non-counter write",58,null],[13,"Batch","","The write was a (logged) batch write.\nIf this type is received, it means the batch log\nhas been successfully written",58,null],[13,"UnloggedBatch","","The write was an unlogged batch. No batch log write has been attempted.",58,null],[13,"Counter","","The write was a counter write (batched or not)",58,null],[13,"BatchLog","","The failure occured during the write to the batch log when a (logged) batch\nwrite was requested.",58,null],[6,"Result","","CDRS specific `Result` which contains a [`Frame`] in case of `Ok` and `CDRSError` if `Err`.",null,null],[11,"fmt","","",48,null],[11,"from_cursor","","",48,{"inputs":[{"name":"cursor"}],"output":{"name":"cdrserror"}}],[11,"fmt","","",57,null],[11,"from_cursor_with_code","","",57,{"inputs":[{"name":"cursor"},{"name":"cint"}],"output":{"name":"additionalerrorinfo"}}],[11,"fmt","","",59,null],[11,"from_cursor","","",59,{"inputs":[{"name":"cursor"}],"output":{"name":"simpleerror"}}],[11,"fmt","","",49,null],[11,"from_cursor","","",49,{"inputs":[{"name":"cursor"}],"output":{"name":"unavailableerror"}}],[11,"fmt","","",50,null],[11,"from_cursor","","",50,{"inputs":[{"name":"cursor"}],"output":{"name":"writetimeouterror"}}],[11,"fmt","","",51,null],[11,"replica_has_responded","","Shows if replica has resonded to a query.",51,null],[11,"from_cursor","","",51,{"inputs":[{"name":"cursor"}],"output":{"name":"readtimeouterror"}}],[11,"fmt","","",52,null],[11,"replica_has_responded","","Shows if replica has resonded to a query.",52,null],[11,"from_cursor","","",52,{"inputs":[{"name":"cursor"}],"output":{"name":"readfailureerror"}}],[11,"fmt","","",53,null],[11,"from_cursor","","",53,{"inputs":[{"name":"cursor"}],"output":{"name":"functionfailureerror"}}],[11,"fmt","","",54,null],[11,"from_cursor","","",54,{"inputs":[{"name":"cursor"}],"output":{"name":"writefailureerror"}}],[11,"fmt","","",58,null],[11,"from_cursor","","",58,{"inputs":[{"name":"cursor"}],"output":{"name":"writetype"}}],[11,"fmt","","",55,null],[11,"from_cursor","","",55,{"inputs":[{"name":"cursor"}],"output":{"name":"alreadyexistserror"}}],[11,"fmt","","",56,null],[11,"from_cursor","","",56,{"inputs":[{"name":"cursor"}],"output":{"name":"unpreparederror"}}],[8,"IntoBytes","cdrs","`IntoBytes` should be used to convert a structure into array of bytes.",null,null],[10,"into_cbytes","","It should convert a struct into an array of bytes.",60,null],[8,"FromBytes","","`FromBytes` should be used to parse an array of bytes into a structure.",null,null],[10,"from_bytes","","It gets and array of bytes and should return an implementor struct.",61,{"inputs":[{"name":"vec"}],"output":{"name":"self"}}],[8,"AsByte","","`AsBytes` should be used to convert a value into a single byte.",null,null],[10,"as_byte","","It should represent a struct as a single byte.",62,null],[8,"FromSingleByte","","`FromSingleByte` should be used to convert a single byte into a value.\nIt is opposite to `AsByte`.",null,null],[10,"from_byte","","It should convert a single byte into an implementor struct.",63,{"inputs":[{"name":"u8"}],"output":{"name":"self"}}],[8,"FromCursor","","`FromCursor` should be used to get parsed structure from an `io:Cursor`\nwich bound to an array of bytes.",null,null],[10,"from_cursor","","It should return an implementor from an `io::Cursor` over an array of bytes.",64,{"inputs":[{"name":"cursor"}],"output":{"name":"self"}}],[14,"hi","","",null,null]],"paths":[[3,"Frame"],[4,"Version"],[4,"Flag"],[4,"Opcode"],[3,"BodyResAuthChallenge"],[3,"BodyReqAuthResponse"],[3,"BodyReqAuthSuccess"],[3,"BodyResAuthenticate"],[3,"BodyReqExecute"],[3,"BodyReqOptions"],[3,"BodyReqPrepare"],[3,"BodyReqQuery"],[3,"ParamsReqQuery"],[4,"QueryFlags"],[3,"BodyResReady"],[4,"ResponseBody"],[3,"BodyResResultSetKeyspace"],[3,"BodyResResultRows"],[3,"RowsMetadata"],[3,"ColSpec"],[3,"ColTypeOption"],[3,"CUdt"],[3,"BodyResResultPrepared"],[3,"PreparedMetadata"],[4,"ResultKind"],[4,"ResResultBody"],[4,"RowsMetadataFlag"],[4,"ColType"],[4,"ColTypeOptionValue"],[3,"BodyResResultVoid"],[3,"BodyReqStartup"],[3,"BodyResSupported"],[3,"Value"],[4,"ValueType"],[3,"CString"],[3,"CStringLong"],[3,"CStringList"],[3,"CBytes"],[3,"CBytesShort"],[6,"CInt"],[6,"CIntShort"],[8,"Authenticator"],[3,"PasswordAuthenticator"],[3,"Credentials"],[3,"CDRS"],[4,"CompressionError"],[4,"Compression"],[4,"Consistency"],[3,"CDRSError"],[3,"UnavailableError"],[3,"WriteTimeoutError"],[3,"ReadTimeoutError"],[3,"ReadFailureError"],[3,"FunctionFailureError"],[3,"WriteFailureError"],[3,"AlreadyExistsError"],[3,"UnpreparedError"],[4,"AdditionalErrorInfo"],[4,"WriteType"],[3,"SimpleError"],[8,"IntoBytes"],[8,"FromBytes"],[8,"AsByte"],[8,"FromSingleByte"],[8,"FromCursor"]]};
initSearch(searchIndex);
