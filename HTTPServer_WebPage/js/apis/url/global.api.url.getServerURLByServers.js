//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/apis/url/global.apis.url.getServerURLByServers.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//20170906_1501;
//SYS00***_APIServer를 사용하길 권장함;
//
//session_server, b2ker_api_server, brand_portal_api_server, api_server등 삭제 예정임.;
//
//excel_server, file_server등도 시스템 코드로 교체 예정;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------[ S ] - 공용 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev;
		SYS0010_APIServer : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
			, session_server : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
		, SYS0010_WebServer : [ "http://localhost:33333", "http://localhost:33333", "http://localhost:33333" ]//B2LiNK-SessionServer-Dev;

		//사용하는 곳 목록;
		//B2LiNK-SessionServer-Dev;
		, SYS0011_APIServer : [ "http://localhost:31000", "http://localhost:31000", "http://localhost:31000" ]//B2LiNK-LogServer-Dev;
		, SYS0011_WebServer : [ "http://localhost:31333", "http://localhost:31333", "http://localhost:31333" ]//B2LiNK-LogServer-Dev;

		//모든 View 서비스에서 사용;
		, SYS0015_APIServer : [ "http://localhost:49324", "http://localhost:49324", "http://localhost:49324" ]//Development-Components-UI;
		, SYS0015_WebServer : [ "http://localhost:49323", "http://localhost:49323", "http://localhost:49323" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "http://localhost:49323", "http://localhost:49323", "http://localhost:49323" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "http://localhost:49323", "http://localhost:49323", "http://localhost:49323" ]//Development-Components-UI;

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev...;
		, SYS0040_APIServer : [ "http://localhost:49322", "http://localhost:49322" ]
			, file_server : [ "http://localhost:49322", "http://localhost:49322" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, SYS0050_APIServer : [ "http://localhost:47320", "http://localhost:47320" ]
			//, webhook_server : [ "http://localhost:47320", "http://localhost:47320" ]
		, SYS0050_APIServer : [ "https://api.b2link.co.kr/b2ker/webhook/router", "https://api.b2link.co.kr/b2ker/webhook/router" ]
			, webhook_server : [ "https://api.b2link.co.kr/b2ker/webhook/router", "https://api.b2link.co.kr/b2ker/webhook/router" ]
		//, SYS0050_APIServer : [ "https://test.api.b2link.co.kr/b2ker/webhook/router", "https://test.api.b2link.co.kr/b2ker/webhook/router" ]
			//, webhook_server : [ "https://test.api.b2link.co.kr/b2ker/webhook/router", "https://test.api.b2link.co.kr/b2ker/webhook/router" ]

		//사용하는 곳 목록;
		//B2LiNK-WebSocket-MessageServer-Dev, ...;
		//, SYS0060_APIServer : [ "http://localhost:42322", "http://localhost:42322" ]
		//, SYS0060_APIServer : [ "http://222.239.10.120:42322", "http://222.239.10.120:42322" ]
		, SYS0060_APIServer : [ "https://api.b2link.co.kr/b2ker/message/router", "https://api.b2link.co.kr/b2ker/message/router" ]
		//, SYS0060_APIServer : [ "https://test.api.b2link.co.kr/b2ker/message/router", "https://test.api.b2link.co.kr/b2ker/message/router" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev, ...;
		, SYS0070_APIServer : [ "http://localhost:48320", "http://localhost:48320" ]
			, excel_server : [ "http://localhost:48320", "http://localhost:48320" ]
		, SYS0070_WebServer : [ "http://localhost:48321", "http://localhost:48321" ]
			, excel_web_server : [ "http://localhost:48321", "http://localhost:48321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		, SYS0120_APIServer : [ "http://localhost:49520", "http://localhost:49520" ]
		, SYS0120_WebServer : [ "http://localhost:49521", "http://localhost:49521" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		, SYS0130_APIServer : [ "http://localhost:44520", "http://localhost:44520" ]
		, SYS0130_WebServer : [ "http://localhost:44521", "http://localhost:44521" ]
		//--------------------------------------------------[ E ] - 공용 서버;


		//--------------------------------------------------[ S ] - 비지니스 시스템 서버;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		, SYS0020_APIServer : [ "http://localhost:49320", "http://localhost:49320" ]
			, b2ker_api_server : [ "http://localhost:49320", "http://localhost:49320" ]
		, SYS0020_WebServer : [ "http://localhost:49321", "http://localhost:49321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, B2LiNK-OnSight--Micro-Dev, ...;
		, SYS0030_APIServer : [ "http://localhost:45320", "http://localhost:45320" ]
			, api_server : [ "http://localhost:45320", "http://localhost:45320" ]
		, SYS0030_WebServer : [ "http://localhost:45321", "http://localhost:45321" ]
		, SYS0030_WebServer_Domain : [ "http://localhost:45321", "http://localhost:45321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight--Macro-Dev, ...;
		, SYS0031_APIServer : [ "http://localhost:45420", "http://localhost:45420" ]
		, SYS0031_WebServer : [ "http://localhost:45421", "http://localhost:45421" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Admin, ...;
		, SYS0034_APIServer : [ "http://localhost:45324", "http://localhost:45324" ]
		, SYS0034_WebServer : [ "http://localhost:45322", "http://localhost:45322" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Tool-SKUMapper, ...;
		, SYS0035_APIServer : [ "http://localhost:45325", "http://localhost:45325" ]
		, SYS0035_WebServer : [ "http://localhost:45326", "http://localhost:45326" ]
		//, SYS0035_APIServer : [ "http://localhost:45325", "http://localhost:45325" ]
		//, SYS0035_WebServer : [ "http://localhost:45326", "http://localhost:45326" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//...;
		, SYS0037_APIServer : [ "http://localhost:45528", "http://localhost:45528" ]
		, SYS0037_WebServer : [ "http://localhost:45527", "http://localhost:45527" ]
		//, SYS0037_APIServer : [ "http://222.239.10.120:45528", "http://222.239.10.120:45528" ]
		//, SYS0037_WebServer : [ "http://222.239.10.120:45527", "http://222.239.10.120:45527" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-ProductServer-Dev ...;
		, SYS0100_APIServer : [ "http://localhost:44320", "http://localhost:44320" ]
		, SYS0100_WebServer : [ "http://localhost:44321", "http://localhost:44321" ]
		//, SYS0100_APIServer : [ "http://localhost:44320", "http://localhost:44320" ]
		//, SYS0100_WebServer : [ "http://localhost:44321", "http://localhost:44321" ]
		//, SYS0100_APIServer : [ "http://localhost:44320", "http://localhost:44320" ]
		//, SYS0100_WebServer : [ "http://localhost:44321", "http://localhost:44321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2B-Platform-Admin ...;
		, SYS0210_APIServer : [ "http://localhost:42320", "http://localhost:42320" ]
		, SYS0210_WebServer : [ "http://localhost:42321", "http://localhost:42321" ]
		//, SYS0210_APIServer : [ "http://localhost:42320", "http://localhost:42320" ]
		//, SYS0210_WebServer : [ "http://localhost:42321", "http://localhost:42321" ]
		//, SYS0210_APIServer : [ "http://localhost:42320", "http://localhost:42320" ]
		//, SYS0210_WebServer : [ "http://localhost:42321", "http://localhost:42321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2B-Platform-Dev ...;
		, SYS0215_APIServer : [ "http://localhost:42325", "http://localhost:42325" ]
		, SYS0215_WebServer : [ "http://localhost:42326", "http://localhost:42326" ]
		//, SYS0215_APIServer : [ "http://localhost:42325", "http://localhost:42325" ]
		//, SYS0215_WebServer : [ "http://localhost:42326", "http://localhost:42326" ]
		//, SYS0215_APIServer : [ "http://localhost:42325", "http://localhost:42325" ]
		//, SYS0215_WebServer : [ "http://localhost:42326", "http://localhost:42326" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Dev ...;
		, SYS0310_APIServer : [ "http://localhost:49780", "http://localhost:49780" ]
		, SYS0310_WebServer : [ "http://localhost:49781", "http://localhost:49781" ]
		//, SYS0310_APIServer : [ "http://localhost:49780", "http://localhost:49780" ]
		//, SYS0310_WebServer : [ "http://localhost:49781", "http://localhost:49781" ]
		//, SYS0310_APIServer : [ "http://localhost:49780", "http://localhost:49780" ]
		//, SYS0310_WebServer : [ "http://localhost:49781", "http://localhost:49781" ]
		//, SYS0310_APIServer : [ "http://dnsproxy.shop:49780", "http://dnsproxy.shop:49780" ]
		//, SYS0310_WebServer : [ "http://dnsproxy.shop:49781", "http://dnsproxy.shop:49781" ]
		//--------------------------------------------------[ E ] - 비지니스 시스템 서버;


		//--------------------------------------------------[ S ] - Util;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Crawler, ...;
		, SYS0032_APIServer : [ "http://localhost:45323", "http://localhost:45323" ]
		//--------------------------------------------------[ E ] - Util;


		//--------------------------------------------------[ S ] - DB Server;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Crawler-Storage-MongoDB, ...;
		, SYS0033_APIServer : [ "http://localhost:45520", "http://localhost:45520" ]
		, SYS0033_WebServer : [ "http://localhost:45521", "http://localhost:45521" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-China-Crawler-Storage-MongoDB ...;
		, SYS0110_APIServer : [ "http://localhost:43320", "http://localhost:43320" ]
		, SYS0110_WebServer : [ "http://localhost:43321", "http://localhost:43321" ]
		//--------------------------------------------------[ E ] - DB Server;


		//--------------------------------------------------[ S ] - Total.js;
		//Total.js - SuperAdmin - 사용하는 곳 목록;
		, SYS4110_APIServer : [ "http://localhost:40320", "http://localhost:40320" ]
		, SYS4110_WebServer : [ "http://localhost:40320", "http://localhost:40320" ]

		//Total.js - wiki - 사용하는 곳 목록;
		, SYS4111_APIServer : [ "http://localhost:40321", "http://localhost:40321" ]
		, SYS4111_WebServer : [ "http://localhost:40321", "http://localhost:40321" ]

		//Total.js - HelpDesk - 사용하는 곳 목록;
		, SYS4112_APIServer : [ "http://localhost:40322", "http://localhost:40322" ]
		, SYS4112_WebServer : [ "http://localhost:40322", "http://localhost:40322" ]

		//Total.js - Messanger - 사용하는 곳 목록;
		, SYS4113_APIServer : [ "http://localhost:40323", "http://localhost:40323" ]
		, SYS4113_WebServer : [ "http://localhost:40323", "http://localhost:40323" ]

		//Total.js - OpenPlatform - 사용하는 곳 목록;
		, SYS4120_APIServer : [ "http://localhost:40330", "http://localhost:40330" ]
		, SYS4120_WebServer : [ "http://localhost:40330", "http://localhost:40330" ]

		//Total.js - CMS - 사용하는 곳 목록;
		, SYS4130_APIServer : [ "http://localhost:40340", "http://localhost:40340" ]
		, SYS4130_WebServer : [ "http://localhost:40340", "http://localhost:40340" ]

		//Total.js - Eshop - 사용하는 곳 목록;
		, SYS4135_APIServer : [ "http://localhost:40345", "http://localhost:40345" ]
		, SYS4135_WebServer : [ "http://localhost:40345", "http://localhost:40345" ]
		//--------------------------------------------------[ E ] - Total.js;
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} nm_server
	 * @return {String} url
	 */
	global.apis.url.getServerURLByServers = function( nm_server )
	{
		if( !_server[ nm_server ] ) debugger;//없는 서버 이름이 들어옴;

		var r;

		if( _idxMaxCount[ nm_server ] > _idx[ nm_server ] )
		{
			r = _server[ nm_server ][ _idx[ nm_server ] ];
			++_idx[ nm_server ];
		}
		else
		{
			_idx[ nm_server ] = 0;
			r = _server[ nm_server ][ _idx[ nm_server ] ];
		}

		return r;
	};

})();

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;