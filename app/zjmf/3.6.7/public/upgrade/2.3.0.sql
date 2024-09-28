ALTER TABLE `shd_invoices` ADD COLUMN `url` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '账单支付后回跳地址';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields1` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段1-10';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields2` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields3` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields4` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields5` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields6` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields7` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields8` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields9` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_person` ADD COLUMN `custom_fields10` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields1` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段1-10';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields2` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields3` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields4` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields5` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields6` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields7` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields8` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields9` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_certifi_company` ADD COLUMN `custom_fields10` VARCHAR(200) NOT NULL DEFAULT '' COMMENT '自定义字段';
ALTER TABLE `shd_plugin` ADD COLUMN `help_url` VARCHAR(2000) NOT NULL DEFAULT '' COMMENT '帮助文档';
ALTER TABLE `shd_nav` ADD `menu_type` TINYINT(7) NOT NULL DEFAULT '1';
INSERT INTO `shd_configuration` (`setting`,`value`) VALUES ('login_error_switch',0);
INSERT INTO `shd_configuration` (`setting`,`value`) VALUES ('login_error_max_num',0);
INSERT INTO `shd_configuration` (`setting`,`value`) VALUES ('allow_resource_api_realname',0);
INSERT INTO `shd_configuration` (`setting`,`value`) VALUES ('allow_resource_api_phone',0);
CREATE TABLE `shd_menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `type` int(1) NOT NULL DEFAULT '1' COMMENT '菜单类型',
  `nav_list` text NOT NULL COMMENT '菜单json串',
  `active` int(1) NOT NULL DEFAULT '1' COMMENT '激活状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
insert  into `shd_menus`(`id`,`name`,`type`,`nav_list`,`active`) values (20,'菜单新',1,'',1),(21,'默认菜单',1,'[{\"fa_icon\":\"bx bx-home-alt\",\"id\":\"1\",\"pid\":\"0\",\"name\":\"\\u7528\\u6237\\u4e2d\\u5fc3\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":1,\"relid\":\"\",\"lang\":\"\",\"url\":\"clientarea\"},{\"fa_icon\":\"bx bxs-grid-alt\",\"id\":\"176\",\"pid\":\"0\",\"name\":\"\\u4ea7\\u54c1\\u4e0e\\u670d\\u52a1\",\"nav_type\":\"1\",\"nav_type_name\":\"\\u81ea\\u5b9a\\u4e49\\u9875\\u9762\",\"order\":2,\"relid\":\"\",\"lang\":\"\",\"url\":\"12312\",\"son\":[{\"fa_icon\":\"\",\"id\":\"8\",\"pid\":\"176\",\"name\":\"\\u8ba2\\u8d2d\\u4ea7\\u54c1\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":3,\"relid\":\"\",\"lang\":\"\",\"url\":\"cart\"},{\"fa_icon\":\"\",\"id\":\"9\",\"pid\":\"176\",\"name\":\"\\u4e91\\u670d\\u52a1\\u5668\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":4,\"relid\":\"\",\"lang\":\"\",\"url\":\"service?groupid=1\"},{\"fa_icon\":\"\",\"id\":\"10\",\"pid\":\"176\",\"name\":\"\\u72ec\\u7acb\\u670d\\u52a1\\u5668\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":5,\"relid\":\"\",\"lang\":\"\",\"url\":\"service?groupid=2\"},{\"fa_icon\":\"\",\"id\":\"11\",\"pid\":\"176\",\"name\":\"\\u5176\\u4ed6\\u670d\\u52a1\\u5668\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":6,\"relid\":\"\",\"lang\":\"\",\"url\":\"service?groupid=3\"}]},{\"fa_icon\":\"bx bx-user\",\"id\":\"177\",\"pid\":\"0\",\"name\":\"\\u8d26\\u6237\\u7ba1\\u7406\",\"nav_type\":\"1\",\"nav_type_name\":\"\\u81ea\\u5b9a\\u4e49\\u9875\\u9762\",\"order\":7,\"relid\":\"\",\"lang\":\"\",\"url\":\"213123\",\"son\":[{\"fa_icon\":\"\",\"id\":\"12\",\"pid\":\"177\",\"name\":\"\\u4e2a\\u4eba\\u4fe1\\u606f\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":8,\"relid\":\"\",\"lang\":\"\",\"url\":\"details\"},{\"fa_icon\":\"\",\"id\":\"13\",\"pid\":\"177\",\"name\":\"\\u5b89\\u5168\\u4e2d\\u5fc3\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":9,\"relid\":\"\",\"lang\":\"\",\"url\":\"security\"},{\"fa_icon\":\"\",\"id\":\"14\",\"pid\":\"177\",\"name\":\"\\u5b9e\\u540d\\u8ba4\\u8bc1\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":10,\"relid\":\"\",\"lang\":\"\",\"url\":\"verified\"},{\"fa_icon\":\"\",\"id\":\"15\",\"pid\":\"177\",\"name\":\"\\u6d88\\u606f\\u4e2d\\u5fc3\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":11,\"relid\":\"\",\"lang\":\"\",\"url\":\"message\"},{\"fa_icon\":\"\",\"id\":\"17\",\"pid\":\"177\",\"name\":\"\\u7cfb\\u7edf\\u65e5\\u5fd7\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":12,\"relid\":\"\",\"lang\":\"\",\"url\":\"systemlog\"}]},{\"fa_icon\":\"bx bx-dollar-circle\",\"id\":\"178\",\"pid\":\"0\",\"name\":\"\\u8d22\\u52a1\\u7ba1\\u7406\",\"nav_type\":\"1\",\"nav_type_name\":\"\\u81ea\\u5b9a\\u4e49\\u9875\\u9762\",\"order\":13,\"relid\":\"\",\"lang\":\"\",\"url\":\"1231\",\"son\":[{\"fa_icon\":\"\",\"id\":\"19\",\"pid\":\"178\",\"name\":\"\\u8d26\\u5355\\u5217\\u8868\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":14,\"relid\":\"\",\"lang\":\"\",\"url\":\"billing\"},{\"fa_icon\":\"\",\"id\":\"24\",\"pid\":\"178\",\"name\":\"\\u8d26\\u6237\\u5145\\u503c\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":15,\"relid\":\"\",\"lang\":\"\",\"url\":\"addfunds\"},{\"fa_icon\":\"\",\"id\":\"37\",\"pid\":\"178\",\"name\":\"\\u4fe1\\u7528\\u989d\\u7ba1\\u7406\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":16,\"relid\":\"\",\"lang\":\"\",\"url\":\"credit\"},{\"fa_icon\":\"\",\"id\":\"35\",\"pid\":\"178\",\"name\":\"\\u4ea4\\u6613\\u8bb0\\u5f55\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":17,\"relid\":\"\",\"lang\":\"\",\"url\":\"transaction\"},{\"fa_icon\":\"\",\"id\":\"180\",\"pid\":\"178\",\"name\":\"\\u53d1\\u7968\\u7ba1\\u7406\",\"nav_type\":\"1\",\"nav_type_name\":\"\\u81ea\\u5b9a\\u4e49\\u9875\\u9762\",\"order\":18,\"editable\":\"\",\"relid\":\"\",\"lang\":\"\",\"url\":\"231\",\"son\":[{\"fa_icon\":\"\",\"id\":\"21\",\"pid\":\"180\",\"name\":\"\\u53d1\\u7968\\u5217\\u8868\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":19,\"relid\":\"\",\"lang\":\"\",\"url\":\"invoicelist\"},{\"fa_icon\":\"\",\"id\":\"22\",\"pid\":\"180\",\"name\":\"\\u53d1\\u7968\\u62ac\\u5934\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":20,\"relid\":\"\",\"lang\":\"\",\"url\":\"invoicecompany\"},{\"fa_icon\":\"\",\"id\":\"23\",\"pid\":\"180\",\"name\":\"\\u6536\\u8d27\\u5730\\u5740\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":21,\"relid\":\"\",\"lang\":\"\",\"url\":\"invoiceaddress\"}]}]},{\"fa_icon\":\"bx bx-detail\",\"id\":\"181\",\"pid\":\"0\",\"name\":\"\\u6280\\u672f\\u652f\\u6301\",\"nav_type\":\"1\",\"nav_type_name\":\"\\u81ea\\u5b9a\\u4e49\\u9875\\u9762\",\"order\":22,\"relid\":\"\",\"lang\":\"\",\"url\":\"231\",\"son\":[{\"fa_icon\":\"\",\"id\":\"25\",\"pid\":\"181\",\"name\":\"\\u5de5\\u5355\\u5217\\u8868\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":23,\"relid\":\"\",\"lang\":\"\",\"url\":\"supporttickets\"},{\"fa_icon\":\"\",\"id\":\"26\",\"pid\":\"181\",\"name\":\"\\u63d0\\u4ea4\\u5de5\\u5355\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":24,\"relid\":\"\",\"lang\":\"\",\"url\":\"submitticket\"},{\"fa_icon\":\"\",\"id\":\"27\",\"pid\":\"181\",\"name\":\"\\u5e2e\\u52a9\\u4e2d\\u5fc3\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":25,\"relid\":\"\",\"lang\":\"\",\"url\":\"knowledgebase\"},{\"fa_icon\":\"\",\"id\":\"28\",\"pid\":\"181\",\"name\":\"\\u65b0\\u95fb\\u4e2d\\u5fc3\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":26,\"relid\":\"\",\"lang\":\"\",\"url\":\"news\"},{\"fa_icon\":\"\",\"id\":\"29\",\"pid\":\"181\",\"name\":\"\\u8d44\\u6e90\\u4e0b\\u8f7d\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":27,\"relid\":\"\",\"lang\":\"\",\"url\":\"downloads\"}]},{\"fa_icon\":\"bx bxs-paper-plane\",\"id\":\"7\",\"pid\":\"0\",\"name\":\"\\u63a8\\u4ecb\\u8ba1\\u5212\",\"nav_type\":\"0\",\"nav_type_name\":\"\\u7cfb\\u7edf\\u9875\\u9762\",\"order\":28,\"relid\":\"\",\"lang\":\"\",\"url\":\"affiliates\"},{\"fa_icon\":\"bx bx-log-in-circle\",\"id\":\"187\",\"pid\":\"0\",\"name\":\"\\u4ea7\\u54c1\\u8f6c\\u79fb\",\"nav_type\":\"1\",\"nav_type_name\":\"\\u81ea\\u5b9a\\u4e49\\u9875\\u9762\",\"order\":29,\"relid\":\"\",\"lang\":\"\",\"son\":[{\"fa_icon\":\"\",\"pid\":\"187\",\"name\":\"\\u8f6c\\u79fb\\u5217\\u8868\",\"nav_type\":\"3\",\"nav_type_name\":\"hook\\/\\u63d2\\u4ef6\",\"order\":30,\"id\":\"123\",\"relid\":\"\",\"lang\":\"\"}]}]',1);
UPDATE `shd_menu_active` SET `menuid` = 21 WHERE `type` = 'client';
UPDATE `shd_menu_active` SET `menuid` = 0 WHERE `type` = 'www_top';
UPDATE `shd_menu_active` SET `menuid` = 0 WHERE `type` = 'www_bottom';
CREATE TABLE `shd_nav` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '名称',
  `url` varchar(255) NOT NULL DEFAULT '' COMMENT '地址',
  `pid` int(11) NOT NULL DEFAULT '0' COMMENT '上级id',
  `order` int(11) NOT NULL DEFAULT '0',
  `fa_icon` varchar(255) NOT NULL DEFAULT '',
  `nav_type` tinyint(7) NOT NULL DEFAULT '0' COMMENT '导航类型 0系统类型,1自定义页面,2产品中心',
  `relid` text NOT NULL COMMENT '关联的商品ID',
  `menuid` int(11) NOT NULL DEFAULT '0' COMMENT '菜单ID',
  `lang` text NOT NULL COMMENT '多语言',
  `plugin` varchar(50) NOT NULL DEFAULT '' COMMENT '插件名称:插件菜单,此值用于卸载时删除菜单',
  `menu_type` tinyint(7) NOT NULL DEFAULT '1' COMMENT '类型（这里的类型指的是哪里的菜单（会员和中心菜单，www头部菜单，底部菜单））',
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`) USING BTREE,
  KEY `menuid` (`menuid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=utf8mb4;
insert  into `shd_nav`(`id`,`name`,`url`,`pid`,`order`,`fa_icon`,`nav_type`,`relid`,`menuid`,`lang`,`plugin`,`menu_type`) values (1,'用户中心','clientarea',0,0,'bx bx-home-circle',0,'1',1,'{\"chinese\":\"\\u7528\\u6237\\u4e2d\\u5fc3\",\"chinese_tw\":\"\\u7528\\u6236\\u4e2d\\u5fc3\",\"english\":\"User Center\"}','',1),(2,'产品与服务','',0,0,'bx bxs-grid-alt',0,'1',1,'{\"chinese\":\"\\u4ea7\\u54c1\\u4e0e\\u670d\\u52a1\",\"chinese_tw\":\"\\u7522\\u54c1\\u8207\\u670d\\u52d9\",\"english\":\"products and services\"}','',1),(3,'账户管理','',0,0,'bx bx-user',0,'1',1,'{\"chinese\":\"\\u8d26\\u6237\\u7ba1\\u7406\",\"chinese_tw\":\"\\u8cec\\u6236\\u7ba1\\u7406\",\"english\":\"Account management\"}','',1),(4,'财务管理','',0,0,'bx bx-dollar-circle',0,'1',1,'{\"chinese\":\"\\u8d22\\u52a1\\u7ba1\\u7406\",\"chinese_tw\":\"\\u8ca1\\u52d9\\u7ba1\\u7406\",\"english\":\"Financial Management\"}','',1),(5,'技术支持','',0,0,'bx bx-detail',0,'1',1,'{\"chinese\":\"\\u6280\\u672f\\u652f\\u6301\",\"chinese_tw\":\"\\u6280\\u8853\\u652f\\u6301\",\"english\":\"Technical Support\"}','',1),(7,'推介计划','affiliates',0,0,'bx bxs-paper-plane',0,'1',1,'{\"chinese\":\"\\u63a8\\u4ecb\\u8ba1\\u5212\",\"chinese_tw\":\"\\u63a8\\u4ecb\\u8a08\\u5283\",\"english\":\"Referral plan\"}','',1),(8,'订购产品','cart',2,0,'',0,'1',1,'{\"chinese\":\"\\u8ba2\\u8d2d\\u4ea7\\u54c1\",\"chinese_tw\":\"\\u8a02\\u8cfc\\u7522\\u54c1\",\"english\":\"Ordering Products\"}','',1),(9,'云服务器','service?groupid=1',2,0,'',0,'1',1,'{\"chinese\":\"\\u4e91\\u670d\\u52a1\\u5668\",\"chinese_tw\":\"\\u96f2\\u670d\\u52d9\\u5668\",\"english\":\"Cloud Server\"}','',1),(10,'独立服务器','service?groupid=2',2,0,'',0,'1',1,'{\"chinese\":\"\\u72ec\\u7acb\\u670d\\u52a1\\u5668\",\"chinese_tw\":\"\\u7368\\u7acb\\u670d\\u52d9\\u5668\",\"english\":\"Standalone server\"}','',1),(11,'其他服务器','service?groupid=3',2,0,'',0,'1',1,'{\"chinese\":\"\\u5176\\u4ed6\\u670d\\u52a1\\u5668\",\"chinese_tw\":\"\\u5176\\u4ed6\\u670d\\u52d9\\u5668\",\"english\":\"Other servers\"}','',1),(12,'个人信息','details',3,0,'',0,'1',1,'{\"chinese\":\"\\u4e2a\\u4eba\\u4fe1\\u606f\",\"chinese_tw\":\"\\u500b\\u4eba\\u4fe1\\u606f\",\"english\":\"Personal information\"}','',1),(13,'安全中心','security',3,0,'',0,'1',1,'{\"chinese\":\"\\u5b89\\u5168\\u4e2d\\u5fc3\",\"chinese_tw\":\"\\u5b89\\u5168\\u4e2d\\u5fc3\",\"english\":\"Security center\"}','',1),(14,'实名认证','verified',3,0,'',0,'1',1,'{\"chinese\":\"\\u5b9e\\u540d\\u8ba4\\u8bc1\",\"chinese_tw\":\"\\u5be6\\u540d\\u8a8d\\u8b49\",\"english\":\"Verified\"}','',1),(15,'消息中心','message',3,0,'',0,'1',1,'{\"chinese\":\"\\u6d88\\u606f\\u4e2d\\u5fc3\",\"chinese_tw\":\"\\u6d88\\u606f\\u4e2d\\u5fc3\",\"english\":\"Message Center\"}','',1),(17,'系统日志','systemlog',3,0,'',0,'1',1,'{\"chinese\":\"\\u7cfb\\u7edf\\u65e5\\u5fd7\",\"chinese_tw\":\"\\u7cfb\\u7d71\\u65e5\\u8a8c\",\"english\":\"System log\"}','',1),(19,'账单列表','billing',4,0,'',0,'1',1,'{\"chinese\":\"\\u8d26\\u5355\\u5217\\u8868\",\"chinese_tw\":\"\\u8cec\\u55ae\\u5217\\u8868\",\"english\":\"Bill list\"}','',1),(20,'发票管理','',4,2,'',0,'1',1,'{\"chinese\":\"\\u53d1\\u7968\\u7ba1\\u7406\",\"chinese_tw\":\"\\u767c\\u7968\\u7ba1\\u7406\",\"english\":\"Invoice management\"}','',1),(21,'发票列表','invoicelist',20,0,'',0,'1',1,'{\"chinese\":\"\\u53d1\\u7968\\u5217\\u8868\",\"chinese_tw\":\"\\u767c\\u7968\\u5217\\u8868\",\"english\":\"Invoice list\"}','',1),(22,'发票抬头','invoicecompany',20,0,'',0,'1',1,'{\"chinese\":\"\\u53d1\\u7968\\u62ac\\u5934\",\"chinese_tw\":\"\\u767c\\u7968\\u62ac\\u982d\",\"english\":\"Invoice\"}','',1),(23,'收货地址','invoiceaddress',20,0,'',0,'1',1,'{\"chinese\":\"\\u6536\\u8d27\\u5730\\u5740\",\"chinese_tw\":\"\\u6536\\u8ca8\\u5730\\u5740\",\"english\":\"Shipping address\"}','',1),(24,'账户充值','addfunds',4,0,'',0,'1',1,'{\"chinese\":\"\\u8d26\\u6237\\u5145\\u503c\",\"chinese_tw\":\"\\u8cec\\u6236\\u5145\\u503c\",\"english\":\"Account recharge\"}','',1),(25,'工单列表','supporttickets',5,0,'',0,'1',1,'{\"chinese\":\"\\u5de5\\u5355\\u5217\\u8868\",\"chinese_tw\":\"\\u5de5\\u55ae\\u5217\\u8868\",\"english\":\"Work order list\"}','',1),(26,'提交工单','submitticket',5,0,'',0,'1',1,'{\"chinese\":\"\\u63d0\\u4ea4\\u5de5\\u5355\",\"chinese_tw\":\"\\u63d0\\u4ea4\\u5de5\\u55ae\",\"english\":\"Submit a work order\"}','',1),(27,'帮助中心','knowledgebase',5,0,'',0,'1',1,'{\"chinese\":\"\\u5e2e\\u52a9\\u4e2d\\u5fc3\",\"chinese_tw\":\"\\u5e6b\\u52a9\\u4e2d\\u5fc3\",\"english\":\"Help center\"}','',1),(28,'新闻中心','news',5,0,'',0,'1',1,'{\"chinese\":\"\\u65b0\\u95fb\\u4e2d\\u5fc3\",\"chinese_tw\":\"\\u65b0\\u805e\\u4e2d\\u5fc3\",\"english\":\"News Center\"}','',1),(29,'资源下载','downloads',5,0,'',0,'1',1,'{\"chinese\":\"\\u8d44\\u6e90\\u4e0b\\u8f7d\",\"chinese_tw\":\"\\u8cc7\\u6e90\\u4e0b\\u8f09\",\"english\":\"Download\"}','',1),(35,'交易记录','transaction',4,1,'',0,'1',1,'{\"chinese\":\"\\u4ea4\\u6613\\u8bb0\\u5f55\",\"chinese_tw\":\"\\u4ea4\\u6613\\u8a18\\u9304\",\"english\":\"Transaction Record\"}','',1),(37,'信用管理','credit',4,0,'',0,'1',1,'{\"chinese\":\"\\u4fe1\\u7528\\u7ba1\\u7406\",\"chinese_tw\":\"\\u4fe1\\u7528\\u7ba1\\u7406\",\"english\":\"Credit management\"}','',1),(109,'插件样式Demo','',0,0,'bx bxs-grid-alt',3,'1',1,'{\"chinese\":\"\\u63d2\\u4ef6\\u6837\\u5f0fDemo\",\"chinese_tw\":\"\\u63d2\\u4ef6\\u6837\\u5f0fDemo\",\"english\":\"Style Demo\"}','DemoStyle',1),(110,'样式1','addons?_plugin=272&_controller=index&_action=addhelp',109,0,'',3,'1',1,'{\"chinese\":\"\\u6837\\u5f0f1\",\"chinese_tw\":\"\\u6837\\u5f0f1\",\"english\":\"Style1\"}','DemoStyle',1),(111,'样式2','addons?_plugin=272&_controller=index&_action=customerdetail1',109,0,'',3,'1',1,'{\"chinese\":\"\\u6837\\u5f0f2\",\"chinese_tw\":\"\\u6837\\u5f0f2\",\"english\":\"Style2\"}','DemoStyle',1),(112,'样式3','addons?_plugin=272&_controller=index&_action=customerdetail2',109,0,'',3,'1',1,'{\"chinese\":\"\\u6837\\u5f0f3\",\"chinese_tw\":\"\\u6837\\u5f0f3\",\"english\":\"Style3\"}','DemoStyle',1),(113,'样式4','addons?_plugin=272&_controller=index&_action=customerdetail3',109,0,'',3,'1',1,'{\"chinese\":\"\\u6837\\u5f0f4\",\"chinese_tw\":\"\\u6837\\u5f0f4\",\"english\":\"Style4\"}','DemoStyle',1),(114,'样式5','addons?_plugin=272&_controller=index&_action=customerdetail4',109,0,'',3,'1',1,'{\"chinese\":\"\\u6837\\u5f0f5\",\"chinese_tw\":\"\\u6837\\u5f0f5\",\"english\":\"Style5\"}','DemoStyle',1),(115,'样式6','addons?_plugin=272&_controller=index&_action=helplist',109,0,'',3,'1',1,'{\"chinese\":\"\\u6837\\u5f0f6\",\"chinese_tw\":\"\\u6837\\u5f0f6\",\"english\":\"Style6\"}','DemoStyle',1),(122,'产品转移','',0,0,'bx bxs-grid-alt',3,'1',1,'{\"chinese\":\"\\u4ea7\\u54c1\\u8f6c\\u79fb\",\"chinese_tw\":\"\\u4ea7\\u54c1\\u8f6c\\u79fb\",\"english\":\"Product Divert\"}','ProductDivert',1),(123,'转移列表','addons?_plugin=285&_controller=index&_action=pushpulllist',122,0,'',3,'1',1,'{\"chinese\":\"\\u8f6c\\u79fb\\u5217\\u8868\",\"chinese_tw\":\"\\u8f6c\\u79fb\\u5217\\u8868\",\"english\":\"Divert List\"}','ProductDivert',1),(125,'自定义页面test','www.baidu.com',0,0,'',1,'',0,'','',1),(127,'插件1','333',0,0,'',3,'',0,'','',1),(128,'插件二','234555 ',0,0,'',3,'',0,'','',1),(129,'自定义test','www.baidu.com',0,0,'',1,'',0,'','',1),(141,'1','service?groupid=141',0,0,'',2,'',0,'','',1),(142,'2','service?groupid=142',0,0,'',2,'',0,'','',1),(143,'2','service?groupid=143',0,0,'',2,'',0,'','',1),(144,'2','service?groupid=144',0,0,'',2,'',0,'','',1),(145,'2','service?groupid=145',0,0,'',2,'',0,'','',1),(146,'2','service?groupid=146',0,0,'',2,'',0,'','',1),(147,'2','service?groupid=147',0,0,'',2,'',0,'','',1),(148,'2','service?groupid=148',0,0,'',2,'',0,'','',1),(149,'2','service?groupid=149',0,0,'',2,'',0,'','',1),(150,'2','service?groupid=150',0,0,'',2,'',0,'','',1),(151,'2','service?groupid=151',0,0,'',2,'',0,'','',1),(152,'2','service?groupid=152',0,0,'',2,'',0,'','',1),(153,'云服务器','service?groupid=153',0,0,'',2,'',0,'','',1),(154,'独立服务器','service?groupid=154',0,0,'',2,'',0,'','',1),(155,'授权软件','service?groupid=155',0,0,'',2,'',0,'','',1),(156,'产品与服务','123',0,0,'',1,'',0,'','',1),(159,'ddd','service?groupid=159',0,0,'',2,'',0,'','',1),(160,'ww','service?groupid=160',0,0,'',2,'',0,'','',1),(161,'ww','service?groupid=161',0,0,'',2,'',0,'','',1),(162,'账户管理','123',0,0,'',1,'',0,'','',1),(163,'账户管理','123',0,0,'',1,'',0,'','',1),(165,'财务管理','12',0,0,'',1,'',0,'','',1),(166,'发票管理','11',0,0,'',1,'',0,'','',1),(167,'技术支持','11',0,0,'',1,'',0,'','',1),(168,'推介计划','22',0,0,'',1,'',0,'','',1),(171,'账户管理','111',0,0,'',1,'',0,'','',1),(172,'产品与服务','12',0,0,'',1,'',0,'','',1),(173,'产品与服务','12',0,0,'',1,'',0,'','',1),(175,'产品转移','123',0,0,'',1,'',0,'','',1),(176,'产品与服务','12312',0,0,'',1,'',0,'','',1),(177,'账户管理','213123',0,0,'',1,'',0,'','',1),(178,'财务管理','1231',0,0,'',1,'',0,'','',1),(179,'发票列表','231',0,0,'',1,'',0,'','',1),(180,'发票列表','231',0,0,'',1,'',0,'','',1),(181,'技术支持','231',0,0,'',1,'',0,'','',1),(183,'推介计划','131',0,0,'',1,'',0,'','',1),(184,'推介计划','131',0,0,'',1,'',0,'','',1),(185,'推介计划','131',0,0,'',1,'',0,'','',1),(186,'推介计划','131',0,0,'',1,'',0,'','',1),(187,'产品转移','123',0,0,'',1,'',0,'','',1);
ALTER TABLE `shd_customfields` ADD COLUMN `showdetail` tinyint(1) NOT NULL DEFAULT '0' COMMENT '产品内页显示';