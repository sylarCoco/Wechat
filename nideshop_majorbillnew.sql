/*
Navicat MySQL Data Transfer

Source Server         : 47.95.215.238
Source Server Version : 50721
Source Host           : 47.95.215.238:3306
Source Database       : wechat

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-08-03 13:45:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `nideshop_majorbillnew`
-- ----------------------------
DROP TABLE IF EXISTS `nideshop_majorbillnew`;
CREATE TABLE `nideshop_majorbillnew` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `apply_time` datetime DEFAULT NULL COMMENT '申请时间',
  `bargain_time` date DEFAULT NULL COMMENT '成交时间',
  `accomplish_time` date DEFAULT NULL COMMENT '完成时间',
  `money` varchar(60) DEFAULT NULL COMMENT '交易金额',
  `order_sn` varchar(100) DEFAULT NULL COMMENT '订单号',
  `money_type` varchar(100) DEFAULT NULL COMMENT '计费类型',
  `settlement_status` varchar(100) DEFAULT '未结算' COMMENT '结算状态',
  `user` varchar(100) DEFAULT NULL COMMENT '用户',
  `order_status` varchar(100) DEFAULT NULL COMMENT '订单状态',
  `bill_number` varchar(100) DEFAULT NULL COMMENT '账单编号',
  `pid` varchar(100) DEFAULT NULL,
  `expire_time` date DEFAULT NULL,
  `cycle_no` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nideshop_majorbillnew
-- ----------------------------
INSERT INTO `nideshop_majorbillnew` VALUES ('34', null, '2018-08-01', '2018-08-07', '1500', null, null, null, null, null, 'ZD20182903132939', '20', '2018-09-07', '20180801');
INSERT INTO `nideshop_majorbillnew` VALUES ('35', null, '2018-08-01', '2018-08-07', '1000', null, null, null, null, null, 'ZD20182903132952', '21', '2018-09-07', '20180801');
INSERT INTO `nideshop_majorbillnew` VALUES ('36', null, '2018-08-08', '2018-08-14', '4000', null, null, null, null, null, 'ZD20183003133004', '22', '2018-09-14', '20180802');
