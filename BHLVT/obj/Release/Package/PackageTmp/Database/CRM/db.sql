 CREATE TABLE [tblanswerlv] (
  [answerid] tinyint NOT NULL,
  [title] nvarchar(100) DEFAULT NULL,
  [content] ntext ,
  [note] ntext 
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcashes]
--

CREATE TABLE [tblcashes] (
  [cashid] int NOT NULL,
  [contractid] nvarchar(20) DEFAULT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL,
  [price] int DEFAULT NULL,
  [feedback] int DEFAULT NULL,
  [description] nvarchar(100) DEFAULT NULL,
  [status] nvarchar(1) NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcategories]
--

CREATE TABLE [tblcategories] (
  [categoryid] nvarchar(16) NOT NULL,
  [categoryname] nvarchar(50) NOT NULL,
  [categorydate] smalldatetime DEFAULT NULL,
  [categoryposition] tinyint DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcities]
--

CREATE TABLE [tblcities] (
  [cityid] char(5) NOT NULL DEFAULT '',
  [cityname] char(30) NOT NULL DEFAULT ''
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcodingdiaries]
--

CREATE TABLE [tblcodingdiaries] (
  [cddid] int NOT NULL,
  [employeeid] nvarchar(16) NOT NULL,
  [customerid] nvarchar(16) NOT NULL,
  [cdddate] smalldatetime DEFAULT NULL,
  [Forms] nvarchar(128) NOT NULL,
  [Progs] nvarchar(128) NOT NULL,
  [Reports] nvarchar(128) NOT NULL,
  [Sys] nvarchar(128) NOT NULL,
  [Tables] nvarchar(128) NOT NULL,
  [Stores] nvarchar(128) NOT NULL,
  [Functions] nvarchar(128) NOT NULL,
  [Description] ntext  NOT NULL,
  [status] nvarchar(3) DEFAULT NULL,
  [note] nvarchar(254) NOT NULL,
  [createdate] smalldatetime DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcompletes]
--

CREATE TABLE [tblcompletes] (
  [reportid] int DEFAULT NULL,
  [employeeid] char(16) DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcontacts]
--

CREATE TABLE [tblcontacts] (
  [contactid] int NOT NULL,
  [customerid] char(20) DEFAULT NULL,
  [contactname] char(30) DEFAULT NULL,
  [position] char(30) DEFAULT NULL,
  [phone] char(20) DEFAULT NULL,
  [fax] char(10) DEFAULT NULL,
  [mobile] char(20) DEFAULT NULL,
  [active] char(1) DEFAULT '0',
  [email] nvarchar(50) NOT NULL,
  [note] ntext  NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcontracts]
--

CREATE TABLE [tblcontracts] (
  [contractid] nvarchar(20) NOT NULL DEFAULT '',
  [contractname] nvarchar(100) DEFAULT NULL,
  [customerid] nvarchar(16) DEFAULT NULL,
  [contractdate] smalldatetime DEFAULT NULL,
  [warranty] tinyint DEFAULT NULL,
  [warrantyid] char(3) DEFAULT NULL,
  [price] int DEFAULT NULL,
  [feedback] int DEFAULT NULL,
  [sellerid] nvarchar(16) DEFAULT NULL,
  [deployid] nvarchar(16) DEFAULT NULL,
  [note] ntext ,
  [checked] smalldatetime NOT NULL DEFAULT '0000-00-00',
  [checked_opt] smalldatetime DEFAULT NULL,
  [deployid1] nvarchar(16) DEFAULT NULL,
  [deployid2] nvarchar(16) DEFAULT NULL,
  [deployid3] nvarchar(16) DEFAULT NULL,
  [deployid4] nvarchar(16) DEFAULT NULL,
  [enclosure] nvarchar(50) DEFAULT NULL,
  [appendix] nvarchar(50) DEFAULT NULL,
  [contracttype] char(1) DEFAULT NULL,
  [contractid1] nvarchar(20) DEFAULT NULL,
  [paid] char(1) DEFAULT NULL,
  [reason] char(1) DEFAULT NULL,
  [status] nvarchar(1) DEFAULT NULL,
  [statusdesc] ntext  NOT NULL,
  [availabledate] smalldatetime NOT NULL,
  [maincontract] nvarchar(1) DEFAULT NULL,
  [appendixcontract] nvarchar(20) NOT NULL,
  [appendix1] nvarchar(50) NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcurrencies]
--

CREATE TABLE [tblcurrencies] (
  [currencyid] char(3) NOT NULL DEFAULT '',
  [currencyname] nvarchar(10) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcustomers]
--

CREATE TABLE [tblcustomers] (
  [customerid] nvarchar(16) NOT NULL DEFAULT '',
  [customername] nvarchar(100) NOT NULL DEFAULT '',
  [address] ntext  NOT NULL,
  [city] nvarchar(5) NOT NULL DEFAULT '',
  [phone] nvarchar(20) NOT NULL DEFAULT '',
  [fax] nvarchar(20) DEFAULT NULL,
  [custype] char(1) DEFAULT NULL,
  [sellerid] nvarchar(16) NOT NULL DEFAULT '',
  [vendorid] nvarchar(5) NOT NULL DEFAULT '',
  [active] char(1) DEFAULT NULL,
  [note] ntext ,
  [createdate] smalldatetime DEFAULT NULL,
  [cmsid] nvarchar(5) DEFAULT NULL,
  [vatid] nvarchar(20) NOT NULL,
  [director] nvarchar(50) NOT NULL,
  [cusalias] ntext  NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblcustomersource]
--

CREATE TABLE [tblcustomersource] (
  [cmsid] nvarchar(5) NOT NULL DEFAULT '',
  [cmsname] nvarchar(50) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tbldailyreports]
--

CREATE TABLE [tbldailyreports] (
  [reportid] bigint NOT NULL,
  [employeeid] nvarchar(16) DEFAULT '0',
  [customerid] nvarchar(16) DEFAULT '0',
  [reportdate] smalldatetime DEFAULT NULL,
  [shour] char(2) DEFAULT NULL,
  [sminute] char(2) DEFAULT NULL,
  [ehour] char(2) DEFAULT NULL,
  [eminute] char(2) DEFAULT NULL,
  [content] ntext ,
  [workin] char(3) DEFAULT NULL,
  [repairs] ntext ,
  [result] char(3) DEFAULT NULL,
  [checkby] nvarchar(16) DEFAULT NULL,
  [note] ntext 
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tbldepartments]
--

CREATE TABLE [tbldepartments] (
  [departmentid] nvarchar(5) NOT NULL DEFAULT '',
  [departmentname] nvarchar(30) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tbldocuments]
--

CREATE TABLE [tbldocuments] (
  [docid] int NOT NULL,
  [date] smalldatetime DEFAULT NULL,
  [title] nvarchar(128) DEFAULT NULL,
  [content] ntext ,
  [type] char(1) DEFAULT NULL,
  [reportfrom] nvarchar(16) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblemployees]
--

CREATE TABLE [tblemployees] (
  [username] nvarchar(16) NOT NULL DEFAULT '',
  [password] nvarchar(32) DEFAULT NULL,
  [firstname] nvarchar(20) DEFAULT NULL,
  [lastname] nvarchar(30) DEFAULT NULL,
  [sex] char(1) DEFAULT NULL,
  [birthday] smalldatetime DEFAULT NULL,
  [workday] smalldatetime DEFAULT NULL,
  [department] nvarchar(5) DEFAULT NULL,
  [position] nvarchar(30) DEFAULT NULL,
  [email] nvarchar(30) DEFAULT NULL,
  [mobile] nvarchar(15) DEFAULT NULL,
  [mission] char(1) DEFAULT NULL,
  [prinum] char(3) DEFAULT NULL,
  [acting] ntext ,
  [webservicetoken] nvarchar(100) NOT NULL DEFAULT ''
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblfunctions]
--

CREATE TABLE [tblfunctions] (
  [functionid] int NOT NULL,
  [contractid] nvarchar(20) DEFAULT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [functiondate] smalldatetime DEFAULT NULL,
  [content] ntext ,
  [completedate] smalldatetime DEFAULT NULL,
  [complete] char(1) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblideadetail]
--

CREATE TABLE [tblideadetail] (
  [ideadetailid] int NOT NULL,
  [ideaid] int DEFAULT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL,
  [content] ntext 
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblideas]
--

CREATE TABLE [tblideas] (
  [ideaid] int NOT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [ideadate] smalldatetime DEFAULT NULL,
  [title] nvarchar(100) DEFAULT NULL,
  [content] ntext ,
  [agree] nvarchar(16) DEFAULT NULL,
  [type] char(1) DEFAULT NULL,
  [OK] char(1) DEFAULT NULL,
  [reason] nvarchar(255) 
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblmess]
--

CREATE TABLE [tblmess] (
  [id] int NOT NULL,
  [name] nvarchar(100) NOT NULL,
  [message] ntext  NOT NULL,
  [received] ntext  NOT NULL,
  [frome] nvarchar(50) NOT NULL,
  [status] int NOT NULL DEFAULT '0',
  [create_date] smalldatetime NOT NULL,
  [url_direct] ntext  NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblmissions]
--

CREATE TABLE [tblmissions] (
  [missionid] int NOT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [customerid] nvarchar(20) DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL,
  [fromh] char(2) DEFAULT NULL,
  [fromi] char(2) DEFAULT NULL,
  [mistype] nvarchar(5) DEFAULT NULL,
  [content] ntext ,
  [todate] smalldatetime NOT NULL,
  [toh] char(2) DEFAULT NULL,
  [toi] char(2) DEFAULT NULL,
  [done] ntext ,
  [wait] ntext ,
  [contactdate] smalldatetime NOT NULL,
  [idea] ntext ,
  [note] ntext  NOT NULL,
  [checkby] nvarchar(16) DEFAULT NULL,
  [addby] nvarchar(16) DEFAULT NULL,
  [addtime] smalldatetime DEFAULT NULL,
  [editby] nvarchar(16) NOT NULL,
  [edittime] smalldatetime NOT NULL,
  [workin] char(3) DEFAULT NULL,
  [repairs] ntext  NOT NULL,
  [result] char(3) DEFAULT NULL,
  [image] ntext  NOT NULL,
  [media] ntext  NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblmissions1]
--

CREATE TABLE [tblmissions1] (
  [missionid] int NOT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [customerid] nvarchar(20) DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL,
  [fromh] char(2) DEFAULT NULL,
  [fromi] char(2) DEFAULT NULL,
  [mistype] nvarchar(5) DEFAULT NULL,
  [content] ntext ,
  [todate] smalldatetime DEFAULT NULL,
  [toh] char(2) DEFAULT NULL,
  [toi] char(2) DEFAULT NULL,
  [done] ntext ,
  [wait] ntext ,
  [contactdate] smalldatetime DEFAULT NULL,
  [idea] ntext ,
  [note] ntext ,
  [checkby] nvarchar(16) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblmissions2]
--

CREATE TABLE [tblmissions2] (
  [missionid] int NOT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [customerid] nvarchar(20) DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL,
  [fromh] char(2) DEFAULT NULL,
  [fromi] char(2) DEFAULT NULL,
  [mistype] nvarchar(5) DEFAULT NULL,
  [content] ntext ,
  [todate] smalldatetime DEFAULT NULL,
  [toh] char(2) DEFAULT NULL,
  [toi] char(2) DEFAULT NULL,
  [done] ntext ,
  [wait] ntext ,
  [contactdate] smalldatetime DEFAULT NULL,
  [idea] ntext ,
  [note] ntext ,
  [checkby] nvarchar(16) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblmissions_copy]
--

CREATE TABLE [tblmissions_copy] (
  [missionid] int NOT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [customerid] nvarchar(20) DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL,
  [fromh] char(2) DEFAULT NULL,
  [fromi] char(2) DEFAULT NULL,
  [mistype] nvarchar(5) DEFAULT NULL,
  [content] ntext ,
  [todate] smalldatetime DEFAULT NULL,
  [toh] char(2) DEFAULT NULL,
  [toi] char(2) DEFAULT NULL,
  [done] ntext ,
  [wait] ntext ,
  [contactdate] smalldatetime DEFAULT NULL,
  [idea] ntext ,
  [note] ntext ,
  [checkby] nvarchar(16) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblmistypes]
--

CREATE TABLE [tblmistypes] (
  [mistypeid] nvarchar(5) NOT NULL DEFAULT '',
  [mistypename] nvarchar(50) DEFAULT '0'
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblproducts]
--

CREATE TABLE [tblproducts] (
  [productid] char(16) NOT NULL DEFAULT '',
  [productname] char(128) DEFAULT NULL,
  [productdate] smalldatetime DEFAULT NULL,
  [categoryid] nvarchar(16) NOT NULL,
  [productposition] tinyint DEFAULT NULL,
  [productstatus] nvarchar(1) NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblprogress]
--

CREATE TABLE [tblprogress] (
  [progressid] int NOT NULL,
  [customerid] nvarchar(16) DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL,
  [content] ntext 
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblpstatus]
--

CREATE TABLE [tblpstatus] (
  [statusid] nvarchar(8) NOT NULL,
  [statusname] nvarchar(48) NOT NULL,
  [image] nvarchar(128) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblquestionlv]
--

CREATE TABLE [tblquestionlv] (
  [questionid] tinyint NOT NULL,
  [content] ntext ,
  [type] char(1) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblquotes]
--

CREATE TABLE [tblquotes] (
  [quoteid] int NOT NULL,
  [customerid] nvarchar(16) DEFAULT '0',
  [employee] nvarchar(16) DEFAULT '0',
  [quotename] nvarchar(100) DEFAULT NULL,
  [quotedate] smalldatetime DEFAULT NULL,
  [sendto] int DEFAULT NULL,
  [enclosure] nvarchar(100) DEFAULT NULL,
  [content] ntext ,
  [note] ntext ,
  [feedback] ntext ,
  [price] int DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblreplies]
--

CREATE TABLE [tblreplies] (
  [replyid] int NOT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [reportid] int DEFAULT NULL,
  [date] smalldatetime DEFAULT NULL,
  [title] nvarchar(100) DEFAULT NULL,
  [content] ntext 
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblreports]
--

CREATE TABLE [tblreports] (
  [reportid] int NOT NULL,
  [date] smalldatetime DEFAULT NULL,
  [title] nvarchar(100) DEFAULT '0',
  [content] ntext ,
  [expire] smalldatetime DEFAULT NULL,
  [reportfrom] nvarchar(16) DEFAULT NULL,
  [reportto] ntext ,
  [type] char(1) NOT NULL DEFAULT '',
  [complete] char(1) NOT NULL DEFAULT 'W'
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblrequests]
--

CREATE TABLE [tblrequests] (
  [requestid] int NOT NULL,
  [customerid] nvarchar(20) DEFAULT NULL,
  [receiver] nvarchar(16) DEFAULT NULL,
  [receivetime] smalldatetime DEFAULT NULL,
  [requestfor] nvarchar(16) DEFAULT NULL,
  [title] nvarchar(100) DEFAULT '0',
  [content] ntext ,
  [contact] nvarchar(30) DEFAULT '0',
  [phone] nvarchar(20) DEFAULT NULL,
  [mobile] nvarchar(20) DEFAULT '0',
  [requesttype] nvarchar(5) DEFAULT NULL,
  [complete] nvarchar(16) DEFAULT NULL,
  [requestdate] smalldatetime DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblschedules]
--

CREATE TABLE [tblschedules] (
  [customerid] nvarchar(16) NOT NULL DEFAULT '',
  [employeeid] nvarchar(16) DEFAULT NULL,
  [scheduleid] int NOT NULL,
  [startdate] smalldatetime DEFAULT NULL,
  [enddate] smalldatetime DEFAULT NULL,
  [content] ntext ,
  [mistype] nvarchar(5) DEFAULT NULL,
  [complete] char(1) DEFAULT NULL,
  [datecomplete] smalldatetime NOT NULL,
  [note] ntext ,
  [shour] char(2) DEFAULT NULL,
  [sminute] char(2) DEFAULT NULL,
  [ehour] char(2) DEFAULT NULL,
  [eminute] tinyint DEFAULT NULL,
  [sidea] nvarchar(1) NOT NULL,
  [sideb] nvarchar(1) NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblstatus]
--

CREATE TABLE [tblstatus] (
  [statusid] int NOT NULL,
  [contractid] nvarchar(20) DEFAULT NULL,
  [employeeid] nvarchar(16) DEFAULT '0',
  [statusdate] smalldatetime DEFAULT NULL,
  [content] ntext 
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tbltimesheet]
--

CREATE TABLE [tbltimesheet] (
  [TsID] int NOT NULL,
  [UserName] nvarchar(16) NOT NULL,
  [CustomerID] nvarchar(16) NOT NULL,
  [TowID] nvarchar(8) NOT NULL,
  [TsDate] smalldatetime NOT NULL,
  [TsBegin] char(5) DEFAULT NULL,
  [TsEnd] char(5) DEFAULT NULL,
  [TsTask] ntext  NOT NULL,
  [TsDescription] ntext  NOT NULL,
  [CompletePercent] tinyint NOT NULL,
  [RequireSupport] ntext  NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tbltopicdetails]
--

CREATE TABLE [tbltopicdetails] (
  [topicid] int DEFAULT NULL,
  [topicdetailid] int NOT NULL,
  [date] smalldatetime DEFAULT NULL,
  [title] nvarchar(255) DEFAULT NULL,
  [content] ntext ,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [enclosure] nvarchar(255) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tbltopics]
--

CREATE TABLE [tbltopics] (
  [topicid] int NOT NULL,
  [employeeid] nvarchar(16) DEFAULT NULL,
  [productid] nvarchar(16) DEFAULT NULL,
  [topicdate] smalldatetime DEFAULT NULL,
  [title] nvarchar(255) DEFAULT NULL,
  [content] ntext ,
  [statusid] nvarchar(8) NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tbltows]
--

CREATE TABLE [tbltows] (
  [TowID] nvarchar(8) NOT NULL,
  [TowName] nvarchar(64) NOT NULL,
  [departmentid] nvarchar(5) NOT NULL
) 

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tbltsright]
--

CREATE TABLE [tbltsright] (
  [UserRight] nvarchar(32) NOT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblvendors]
--

CREATE TABLE [tblvendors] (
  [vendorid] nvarchar(5) NOT NULL DEFAULT '',
  [vendorname] nvarchar(30) NOT NULL DEFAULT ''
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblwarranties]
--

CREATE TABLE [tblwarranties] (
  [warrantyid] char(3) NOT NULL DEFAULT '0',
  [warrantyname] nvarchar(30) DEFAULT NULL
)


-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng [tblwishes]
--

CREATE TABLE [tblwishes] (
  [wishid] int NOT NULL,
  [content] ntext  NOT NULL,
  [image] nvarchar(256) DEFAULT NULL,
  [type] nvarchar(3) NOT NULL
)

--
--
--
ALTER TABLE [tblanswerlv] DROP COLUMN answerid 
 ALTER TABLE [tblanswerlv] ADD answerid INT IDENTITY(1,1) 

 ALTER TABLE [tblcashes] DROP COLUMN cashid 
 ALTER TABLE [tblcashes] ADD cashid INT IDENTITY(1,1) 

 ALTER TABLE [tblcodingdiaries] DROP COLUMN cddid 
 ALTER TABLE [tblcodingdiaries] ADD cddid INT IDENTITY(1,1) 

 ALTER TABLE [tblcontacts] DROP COLUMN contactid 
 ALTER TABLE [tblcontacts] ADD contactid INT IDENTITY(1,1) 

 ALTER TABLE [tbldailyreports] DROP COLUMN reportid 
 ALTER TABLE [tbldailyreports] ADD reportid INT IDENTITY(1,1) 

 ALTER TABLE [tbldocuments] DROP COLUMN docid 
 ALTER TABLE [tbldocuments] ADD docid INT IDENTITY(1,1) 

 ALTER TABLE [tblfunctions] DROP COLUMN functionid 
 ALTER TABLE [tblfunctions] ADD functionid INT IDENTITY(1,1) 

 ALTER TABLE [tblideadetail] DROP COLUMN ideadetailid 
 ALTER TABLE [tblideadetail] ADD ideadetailid INT IDENTITY(1,1) 

 ALTER TABLE [tblideas] DROP COLUMN ideaid 
 ALTER TABLE [tblideas] ADD ideaid INT IDENTITY(1,1) 

 ALTER TABLE [tblmess] DROP COLUMN id 
 ALTER TABLE [tblmess] ADD id INT IDENTITY(1,1) 

 ALTER TABLE [tblmissions] DROP COLUMN missionid 
 ALTER TABLE [tblmissions] ADD missionid INT IDENTITY(1,1) 

 ALTER TABLE [tblmissions1] DROP COLUMN missionid 
 ALTER TABLE [tblmissions1] ADD missionid INT IDENTITY(1,1) 

 ALTER TABLE [tblmissions2] DROP COLUMN missionid 
 ALTER TABLE [tblmissions2] ADD missionid INT IDENTITY(1,1) 

 ALTER TABLE [tblmissions_copy] DROP COLUMN missionid 
 ALTER TABLE [tblmissions_copy] ADD missionid INT IDENTITY(1,1) 

 ALTER TABLE [tblprogress] DROP COLUMN progressid 
 ALTER TABLE [tblprogress] ADD progressid INT IDENTITY(1,1) 

 ALTER TABLE [tblquestionlv] DROP COLUMN questionid 
 ALTER TABLE [tblquestionlv] ADD questionid INT IDENTITY(1,1) 

 ALTER TABLE [tblquotes] DROP COLUMN quoteid 
 ALTER TABLE [tblquotes] ADD quoteid INT IDENTITY(1,1) 

 ALTER TABLE [tblreplies] DROP COLUMN replyid 
 ALTER TABLE [tblreplies] ADD replyid INT IDENTITY(1,1) 

 ALTER TABLE [tblreports] DROP COLUMN reportid 
 ALTER TABLE [tblreports] ADD reportid INT IDENTITY(1,1) 

 ALTER TABLE [tblrequests] DROP COLUMN requestid 
 ALTER TABLE [tblrequests] ADD requestid INT IDENTITY(1,1) 

 ALTER TABLE [tblschedules] DROP COLUMN scheduleid 
 ALTER TABLE [tblschedules] ADD scheduleid INT IDENTITY(1,1) 

 ALTER TABLE [tblstatus] DROP COLUMN statusid 
 ALTER TABLE [tblstatus] ADD statusid INT IDENTITY(1,1) 

 ALTER TABLE [tbltimesheet] DROP COLUMN TsID 
 ALTER TABLE [tbltimesheet] ADD TsID INT IDENTITY(1,1) 

 ALTER TABLE [tbltopicdetails] DROP COLUMN topicdetailid 
 ALTER TABLE [tbltopicdetails] ADD topicdetailid INT IDENTITY(1,1) 

 ALTER TABLE [tbltopics] DROP COLUMN topicid 
 ALTER TABLE [tbltopics] ADD topicid INT IDENTITY(1,1) 

 ALTER TABLE [tblwishes] DROP COLUMN wishid 
 ALTER TABLE [tblwishes] ADD wishid INT IDENTITY(1,1) 

--
-- Chỉ mục cho bảng [tblanswerlv]
--
ALTER TABLE [tblanswerlv]
  ADD PRIMARY KEY ([answerid])
  


--
-- Chỉ mục cho bảng [tblcashes]
--
ALTER TABLE [tblcashes]
  ADD PRIMARY KEY ([cashid])


--
-- Chỉ mục cho bảng [tblcategories]
--
ALTER TABLE [tblcategories]
  ADD PRIMARY KEY ([categoryid])


--
-- Chỉ mục cho bảng [tblcities]
--
ALTER TABLE [tblcities]
  ADD PRIMARY KEY ([cityid])


--
-- Chỉ mục cho bảng [tblcodingdiaries]
--
ALTER TABLE [tblcodingdiaries]
  ADD PRIMARY KEY ([cddid])


--
-- Chỉ mục cho bảng [tblcontacts]
--
ALTER TABLE [tblcontacts]
  ADD PRIMARY KEY ([contactid])


--
-- Chỉ mục cho bảng [tblcontracts]
--
ALTER TABLE [tblcontracts]
  ADD PRIMARY KEY ([contractid])


--
-- Chỉ mục cho bảng [tblcurrencies]
--
ALTER TABLE [tblcurrencies]
  ADD PRIMARY KEY ([currencyid])


--
-- Chỉ mục cho bảng [tblcustomers]
--
ALTER TABLE [tblcustomers]
  ADD PRIMARY KEY ([customerid])


--
-- Chỉ mục cho bảng [tblcustomersource]
--
ALTER TABLE [tblcustomersource]
  ADD PRIMARY KEY ([cmsid])


--
-- Chỉ mục cho bảng [tbldailyreports]
--
ALTER TABLE [tbldailyreports]
  ADD PRIMARY KEY ([reportid])


--
-- Chỉ mục cho bảng [tbldepartments]
--
ALTER TABLE [tbldepartments]
  ADD PRIMARY KEY ([departmentid])


--
-- Chỉ mục cho bảng [tbldocuments]
--
ALTER TABLE [tbldocuments]
  ADD PRIMARY KEY ([docid])
  


--
-- Chỉ mục cho bảng [tblemployees]
--
ALTER TABLE [tblemployees]
  ADD PRIMARY KEY ([username])


--
-- Chỉ mục cho bảng [tblfunctions]
--
ALTER TABLE [tblfunctions]
  ADD PRIMARY KEY ([functionid])


--
-- Chỉ mục cho bảng [tblideadetail]
--
ALTER TABLE [tblideadetail]
  ADD PRIMARY KEY ([ideadetailid])


--
-- Chỉ mục cho bảng [tblideas]
--
ALTER TABLE [tblideas]
  ADD PRIMARY KEY ([ideaid])


--
-- Chỉ mục cho bảng [tblmess]
--
ALTER TABLE [tblmess]
  ADD PRIMARY KEY ([id])


--
-- Chỉ mục cho bảng [tblmissions]
--
ALTER TABLE [tblmissions]
  ADD PRIMARY KEY ([missionid])


--
-- Chỉ mục cho bảng [tblmissions1]
--
ALTER TABLE [tblmissions1]
  ADD PRIMARY KEY ([missionid])


--
-- Chỉ mục cho bảng [tblmissions2]
--
ALTER TABLE [tblmissions2]
  ADD PRIMARY KEY ([missionid])


--
-- Chỉ mục cho bảng [tblmissions_copy]
--
ALTER TABLE [tblmissions_copy]
  ADD PRIMARY KEY ([missionid])


--
-- Chỉ mục cho bảng [tblmistypes]
--
ALTER TABLE [tblmistypes]
  ADD PRIMARY KEY ([mistypeid])
  


--
-- Chỉ mục cho bảng [tblproducts]
--
ALTER TABLE [tblproducts]
  ADD PRIMARY KEY ([productid])


--
-- Chỉ mục cho bảng [tblprogress]
--
ALTER TABLE [tblprogress]
  ADD PRIMARY KEY ([progressid])


--
-- Chỉ mục cho bảng [tblpstatus]
--
ALTER TABLE [tblpstatus]
  ADD PRIMARY KEY ([statusid])


--
-- Chỉ mục cho bảng [tblquestionlv]
--
ALTER TABLE [tblquestionlv]
  ADD PRIMARY KEY ([questionid])
  


--
-- Chỉ mục cho bảng [tblquotes]
--
ALTER TABLE [tblquotes]
  ADD PRIMARY KEY ([quoteid])


--
-- Chỉ mục cho bảng [tblreplies]
--
ALTER TABLE [tblreplies]
  ADD PRIMARY KEY ([replyid])


--
-- Chỉ mục cho bảng [tblreports]
--
ALTER TABLE [tblreports]
  ADD PRIMARY KEY ([reportid])


--
-- Chỉ mục cho bảng [tblrequests]
--
ALTER TABLE [tblrequests]
  ADD PRIMARY KEY ([requestid])


--
-- Chỉ mục cho bảng [tblschedules]
--
ALTER TABLE [tblschedules]
  ADD PRIMARY KEY ([scheduleid])


--
-- Chỉ mục cho bảng [tblstatus]
--
ALTER TABLE [tblstatus]
  ADD PRIMARY KEY ([statusid])


--
-- Chỉ mục cho bảng [tbltimesheet]
--
ALTER TABLE [tbltimesheet]
  ADD PRIMARY KEY ([TsID])


--
-- Chỉ mục cho bảng [tbltopicdetails]
--
ALTER TABLE [tbltopicdetails]
  ADD PRIMARY KEY ([topicdetailid])


--
-- Chỉ mục cho bảng [tbltopics]
--
ALTER TABLE [tbltopics]
  ADD PRIMARY KEY ([topicid])


--
-- Chỉ mục cho bảng [tbltows]
--
ALTER TABLE [tbltows]
  ADD PRIMARY KEY ([TowID])


--
-- Chỉ mục cho bảng [tblvendors]
--
ALTER TABLE [tblvendors]
  ADD PRIMARY KEY ([vendorid])


--
-- Chỉ mục cho bảng [tblwarranties]
--
ALTER TABLE [tblwarranties]
  ADD PRIMARY KEY ([warrantyid])


--
-- Chỉ mục cho bảng [tblwishes]
--
ALTER TABLE [tblwishes]
  ADD PRIMARY KEY ([wishid])


 