/*
 @description d3v constants
 @date 		  7.20.2012
 @author	  phil rymek
 
 Copyright (c) 2020, salesforce.com, inc.
 All rights reserved.
 SPDX-License-Identifier: BSD-3-Clause
 For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause 
*/

var D3V_URL;
var SANDBOX                  = 'test';
var PRODUCTION               = 'login';
var LOGIN_FAIL               = 'failed to login';
var FALSE_STR                = 'false';
var DOCUMENT_TITLE			 = 'title';
var DATA_SECTION			 = 'data';
var TEST_SECTION			 = 'test';
var PUSH_SECTION			 = 'push';
var CODE_SECTION			 = 'code';
var TITLE_DELIMETER			 = ' | ';
var COOKIE_PRE               = 'd3v';
var COOKIE_SID               = 'sid';
var COOKIE_MEP               = 'mep';
var COOKIE_RTK               = 'rtk';
var COOKIE_AEP               = 'aep';
var COOKIE_PEP               = 'pep';
var COOKIE_UID               = 'uid';
var COOKIE_STK				 = 'stk';
var COOKIE_SAVE_THEME        = 'thm';
var COOKIE_SAVE_INDENT       = 'idg';
var COOKIE_SAVE_MERGE        = 'mrg';
var COOKIE_SAVE_SOFT_TAB     = 'stb';
var COOKIE_SAVE_TAB_SIZE     = 'tbs';
var COOKIE_SAVE_FONT_SIZE    = 'fts';
var COOKIE_SAVE_ACTIVE_LINE  = 'alh';
var COOKIE_SAVE_ACTIVE_WORD  = 'awh';
var COOKIE_SAVE_SHOW_INVIS   = 'siv';
var COOKIE_SAVE_SHOW_PM      = 'spm';
var COOKIE_SAVE_PM_SIZE      = 'pms';
var COOKIE_SAVE_BEAUTY_SIZE  = 'pbs';
var COOKIE_SAVE_MERGE        = 'mst';
var COOKIE_ALLOW_MISSING     = 'amf';
var COOKIE_VALIDATE_ONLY     = 'pvo';
var COOKIE_IGNORE_WARNINGS   = 'pio';
var COOKIE_DELETE_PURGE      = 'pdp';
var COOKIE_PUSH_RAT          = 'prt';
var COOKIE_PUSH_DETAIL       = 'psd';
var COOKIE_REPORT_FILTER     = 'crf';
var COOKIE_TAB_OPEN          = 'kto';
var COOKIE_DEBUG_OPEN_PREF   = 'dop';
var COOKIE_LOCAL_OPEN_PREF   = 'lop';
var COOKIE_LOGGING_LEVELS    = 'lls';
var COOKIE_SAVE_STYLESHEET   = 'csh';
var COOKIE_SAVE_BINDINGS     = 'csb';
var COOKIE_RETRIEVE_VERSION  = 'crv;'
var INSTANCE_STATUS          = 'istat';
var TAB_OPEN_VALUE           = 'open';
var TAB_CLOSED_VALUE         = 'closed';
var INCLUDE_LOCAL_AC         = 'iac';
var LAST_RETRIEVE_TIME       = 'lrt';
var SHOW_FOOTER              = 'sft';
var LAST_DEPLOY_TIME         = 'ldt';
var AUTO_AUTOCOMPLETE        = 'aac';
var SCROLL_PAST_END          = 'spe';
var SPE_VALUE                = 0.45;
var LAST_TEST_FILTER         = 'ltf';
var NAMESPACE_FILTER         = 'nfr';
var SELECTED_FOOTER          = 'sfm';
var ANONYMOUS_BLOCK          = 'eab';
var AUTO_RESOLVE_CONFLICT    = 'arc';
var SETTING_SYNC_PREFERENCE  = 'ssp';
var SWITCH_METHOD_PREFERENCE = 'smp';
var DIFF_EDITOR_VISIBILITY   = 'dev';
var RUN_BY_QUERY             = 'rbq';
var RUN_BY_SELECTION         = 'rbs';
var GP_PREF_SIZE             = 'gps';
var GP_PREF_OPEN             = 'gpo';
var FIND_ALL_PREFERENCE      = 'fap';
var RELATED_PREFERENCE       = 'rpf';
var FIND_PREFERENCES         = 'fpr';
var PASSWORD                 = 'password';
var SEC_TOKEN                = 'security token';
var ATTR_TYPE                = 'type';
var ATTR_UN	                 = 'username';
var DELETE_PER_CALL          = 50;
var ALERT_DISPLAY_TIME       = 7500;
var ALERT_DISPLAY_TIME_LONG  = 37500;
var ALERT_FADE_TIME          = 2500;
var HELP_FADE		         = 750;
var INPUT_HEIGHT	         = 18
var DEFAULT_VERSION          = '-1.0';
var MIN_VERSION              = 10;
var MAX_VERSION              = -1;
var TOKEN_COOKIE_DAYS		 = 30;
var OPTION_SLIDE_TIME        = 1250;
var ACTIVE_OFFSET            = 40;
var MENU_SPACING             = 30;
var RIGHT_OF_SIDEBAR         = 20;
var MAX_ERROR_LENGTH         = 75;
var NEW_TEST_CODE            = '@isTest\nprivate class CLASS_NAME {\n\n\tprivate static testMethod void test() {\n\n\t}\n\n}';
var NEW_COMPONENT_MARKUP     = '<apex:component>\n\n</apex:component>';
var NEW_PAGE_MARKUP          = '<apex:page>\n\n</apex:page>';
var NEW_CLASS_CODE           = 'public class CLASS_NAME {\n\n}';
var NEW_TRIGGER_CODE         = 'trigger TRIGGER_NAME on SOBJECT_NAME (WHEN) {\n\n}';
var NEW_OBJECT_MARKUP        = '{\n\t"label": "My Object",\n\t"pluralLabel": "My Objects",\n\t"fullName": "My_Object__c",\n\t"sharingModel": "ReadWrite",\n\t"nameField": {\n\t\t"type": "Text",\n\t\t"label": "My Object Name"\n\t},\n\t"fields": [{\n\t\t"type": "Text",\n\t\t"fullName": "My_Custom_Field__c",\n\t\t"length": "255",\n\t\t"label": "My Custom Field",\n\t\t"required": false,\n\t\t"externalId": false,\n\t\t"trackTrending": false,\n\t\t"unique": false\n\t}],\n\t"enableActivities": false,\n\t"enableFeeds": false,\n\t"enableHistory": false,\n\t"enableReports": false,\n\t"deploymentStatus": "Deployed",\n\t"compactLayoutAssignment": "SYSTEM"\n}';
var NEW_PACKAGE_MARKUP       = '<?xml version="1.0" encoding="UTF-8"?>\n<Package xmlns="http://soap.sforce.com/2006/04/metadata">\n\t<types>\n\t\t<members></members>\n\t\t<name></name>\n\t</types>\n\t<version>' + DEFAULT_VERSION + '</version>\n</Package>';
var PENDING_HEADER_HEIGHT    = 105;
var RESULT_HEADER_HEIGHT     = 140;
var STORAGE_PREFIX           = 'd3v-';
var DATE_SUFFIX              = '-date';
var MAX_VERSIONS             = 7;
var DATABASE_NAME            = 'archival';
var TABLE_CODE_BACKUP        = 'backups';
var TABLE_PUSH_FILTERS       = 'push-filters-2';
var TABLE_CODE_HISTORY       = 'local-history';
var TABLE_SOQL               = 'soql';
var TABLE_TEST_FILTER        = 'test-filter';
var TRANSACTION_READ         = 'readonly';
var TRANSACTION_WRITE        = 'readwrite';
var INDEX_NAME               = 'name';
var DEF_CODE_HISTORY_LENGTH  = 30;
var RECENT_COMMANDS          = 'd3vrc';
var MAX_RECENTS              = 7;
var TIMESTAMP                = 'tsp';
var SESSION_KEEP_ALIVE       = 600000;
var BACKUP_EXT               = '__bkup';
var FILE_NOT_FOUND_ERROR     = 'FNFE';
var RETRIEVE_WAIT            = 3333;
var DEPLOY_WAIT              = 5000;
var COVERAGE_ANIMATE_TIME    = 2000;
var ERROR_MESSAGE_PAUSE      = 3250;
var REAUTH_DELAY             = 6500;
var REFRESH_MAX_WAIT         = 20000;
var MAX_RESOURCE_SIZE        = 5000000;
var IDB_VERSION              = 9;
var TAB_ANIMATION_LENGTH     = 500;
var STATUS_PREFIX            = 'sync_status_';
var OCS_VERSION              = '1.1';
var TYPE_RESOURCE            = 'resource';
var TYPE_OBJECT              = 'object';
var VF_DEV_GUIDE_SEARCH_URL  = 'http://www.salesforce.com/us/developer/docs/pages/index_Left.htm?';
var NS_COOKIE_VALUE_PREFIX   = '_NS=';
var PUBLIC_MODIFIER          = 'public';
var STATIC_MODIFIER          = 'static';
var SYM_TABLES               = 'SymTbl';
var REQUEST_STATUS           = 'req_status';
var RESPONSE_STATUS          = 'resp_status';
var REQUEST_CLOSE            = 'req_close';
var REQUEST_SWITCH           = 'req_switch';
var REQUEST_ADD_FILE         = 'req_addfile';
var REQUEST_REMOVE_FILE      = 'req_remfile';
var REQUEST_FIND_SYNC        = 'req_find';
var REQUEST_TAB_FLASH        = 'req_tf';
var REQUEST_TAB_RESET        = 'req_tr';
var REQUEST_RECENT_FILES     = 'req_rf';
var TAB_STATUS               = 'tab_status';
var CLOSE_TIMEOUT            = 1000;
var MAX_TAB_DISPLAY          = 4;
var SWITCH_MESSAGE           = 'Focus requested';
var VISIBILITY_VISIBLE       = 'visible';
var VISBILITY_HIDDEN         = 'hidden';
var VISIBILITY_TIMEOUT       = 5000;
var STATUS_TIMEOUT           = 2000;
var REQUEST_TAB_SYNC         = 'req_tabsync';
var REQUEST_SETTING_SYNC     = 'req_setsync';
var TAB_FLASH_NAME           = 'Click Me!';
var FLASH_DELAY              = 300;
var POSITION_MARKER          = '[[CURSOR]]_';
var OPEN_PREF_DEFAULT        = 'download';
var FIND_ALL_PREF_DEFAULT    = 'current';
var RELATED_PREF_DEFAULT     = 'new';
var LOG_LEVELS               = ['apexcode', 'apexprofiling', 'callout', 'database', 'system', 'validation', 'visualforce', 'workflow'];
var LOG_LEVELS_PREFIX        = 'debug-';
var LOG_LEVEL_DEFAULT        = 'DEBUG';
var DIFF_EDITOR_WIDTHS       = 'dew';
var DIFF_EDITOR_WIDTHS_DEF   = '0.5';
var JSZIP_FILE_PERMISSIONS   = "644";
var SF_DEPLOY                = '\n[sf:deploy] ';
var MULTI_CURSOR_ALLOWED     = 'mca';
var PACKAGE_XML_FILE         = 'pxf';
var TRACKING_REFRESH         = 270000;
var BACKUP_LIFESPAN          = 172800000;
var HISTORY_SAVE_BUFFER      = 3000;
var NUM_ZIP_MENU_ITEMS       = 10;
var ZIP_BASE_DISPLAY_NAME    = 'open resource';
var LIGHTNING_EXT            = 'aura';
var GP_MAX_SIZE              = 0.80;
var GP_DEFAULT_PREF_SIZE     = 200;
var GP_MIN_SIZE              = 185;
var GP_SMALL_TABLE           = 375;
var RESIZE_END_DELAY         = 250;
var OCS_MAX_ROWS             = 100;
var OCS_SNIPPET_BUFFER       = 10;
var OCS_OPEN_HIGHLIGHT       = '[[aside.io.ocs]]';
var OCS_CLOSE_HIGHLIGHT      = '[[!aside.io.ocs]]';
var UI_THEME_FILE            = 'utf';
var DEFAULT_STYLESHEET       = '/css/d3v.css';
var PKG_METHOD_WILDCARD      = 'wildcard';
var PKG_METHOD_QUERY         = 'query';
var PKG_METHOD_WRITTEN       = 'written';
var PKG_METHOD_XML           = 'xml';