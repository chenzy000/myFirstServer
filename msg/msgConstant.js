﻿module.exports = {

    LOGIN_GROUP: {
        REGIST: 'Cmd_LoginGroup_Regist',
        LOGIN:  'Cmd_LoginGroup_Login',
        LOGOUT: 'Cmd_LoginGroup_Logout'
    },         
    
    DIR: {
        HANDLER: 'handler',
        REMOTE: 'remote',
        CRON: 'cron',
        LOG: 'logs',
        SCRIPT: 'scripts',
        EVENT: 'events',
        COMPONENT: 'components'
    },
    
    RESERVED: {
        BASE: 'base',
        MAIN: 'main',
        MASTER: 'master',
        SERVERS: 'servers',
        ENV: 'env',
        CPU: 'cpu',
        ENV_DEV: 'development',
        ENV_PRO: 'production',
        ALL: 'all',
        SERVER_TYPE: 'serverType',
        SERVER_ID: 'serverId',
        CURRENT_SERVER: 'curServer',
        MODE: 'mode',
        TYPE: 'type',
        CLUSTER: 'clusters',
        STAND_ALONE: 'stand-alone',
        START: 'start',
        AFTER_START: 'afterStart',
        CRONS: 'crons',
        ERROR_HANDLER: 'errorHandler',
        GLOBAL_ERROR_HANDLER: 'globalErrorHandler',
        AUTO_RESTART: 'auto-restart',
        RESTART_FORCE: 'restart-force',
        CLUSTER_COUNT: 'clusterCount',
        CLUSTER_PREFIX: 'cluster-server-',
        CLUSTER_SIGNAL: '++',
        RPC_ERROR_HANDLER: 'rpcErrorHandler',
        SERVER: 'server',
        CLIENT: 'client',
        STARTID: 'startId',
        STOP_SERVERS: 'stop_servers',
        SSH_CONFIG_PARAMS: 'ssh_config_params'
    },
    
    COMMAND: {
        TASKSET: 'taskset',
        KILL: 'kill',
        TASKKILL: 'taskkill',
        SSH: 'ssh'
    },
    
    PLATFORM: {
        WIN: 'win32',
        LINUX: 'linux'
    },
    
    LIFECYCLE: {
        BEFORE_STARTUP: 'beforeStartup',
        BEFORE_SHUTDOWN: 'beforeShutdown',
        AFTER_STARTUP: 'afterStartup',
        AFTER_STARTALL: 'afterStartAll'
    },
    
    SIGNAL: {
        FAIL: 0,
        OK: 1
    },
    
    TIME: {
        TIME_WAIT_STOP: 3 * 1000,
        TIME_WAIT_KILL: 5 * 1000,
        TIME_WAIT_RESTART: 5 * 1000,
        TIME_WAIT_COUNTDOWN: 10 * 1000,
        TIME_WAIT_MASTER_KILL: 2 * 60 * 1000,
        TIME_WAIT_MONITOR_KILL: 2 * 1000,
        TIME_WAIT_PING: 30 * 1000,
        TIME_WAIT_MAX_PING: 5 * 60 * 1000,
        DEFAULT_UDP_HEARTBEAT_TIME: 20 * 1000,
        DEFAULT_UDP_HEARTBEAT_TIMEOUT: 100 * 1000,
        DEFAULT_MQTT_HEARTBEAT_TIMEOUT: 90 * 1000
    }
};