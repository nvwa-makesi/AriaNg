(function () {
    'use strict';
    angular.module('ariaNg').constant('aria2AllOptions', {
        // EXAMPLE:
        // 'option key': {
        //     [since: '',] //This option is supported by this or higher aria2 version
        //     type: 'string|integer|float|text|boolean|option',
        //     [suffix: 'Bytes|Milliseconds|Seconds|Minutes|Hours',]
        //     [readonly: true|false,] //default: false
        //     [defaultValue: '',]
        //     [required: true|false,] //default: false
        //     [split: '',] //SUPPORT 'text' type
        //     [showCount: true|false,] //SUPPORT 'text' type, parameter 'split' is required, default: false
        //     [options: [],] //SUPPORT 'option' type
        //     [min: 0,] //SUPPORT 'integer', 'float'
        //     [max: 0,] //SUPPORT 'integer', 'float'
        //     [pattern: '']
        // }
        'dir': {
            type: 'string',
            required: true
        },
        'log': {
            type: 'string',
            required: true
        },
        'max-concurrent-downloads': {
            type: 'integer',
            defaultValue: '5',
            required: true,
            min: 1
        },
        'check-integrity': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'continue': {
            type: 'boolean',
            required: true
        },
        'all-proxy': {
            type: 'string'
        },
        'all-proxy-user': {
            type: 'string'
        },
        'all-proxy-passwd': {
            type: 'string'
        },
        'connect-timeout': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '60',
            required: true,
            min: 1,
            max: 600
        },
        'dry-run': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'lowest-speed-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'max-connection-per-server': {
            type: 'integer',
            defaultValue: '1',
            required: true,
            min: 1,
            max: 16
        },
        'max-file-not-found': {
            type: 'integer',
            defaultValue: '0',
            required: true,
            min: 0
        },
        'max-tries': {
            type: 'integer',
            defaultValue: '5',
            required: true,
            min: 0
        },
        'min-split-size': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '20M',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'netrc-path': {
            type: 'string',
            readonly: true,
            defaultValue: '$(HOME)/.netrc'
        },
        'no-netrc': {
            type: 'boolean',
            required: true
        },
        'no-proxy': {
            type: 'text',
            split: ',',
            showCount: true
        },
        'out': {
            type: 'string'
        },
        'proxy-method': {
            type: 'option',
            options: ['get', 'tunnel'],
            defaultValue: 'get',
            required: true
        },
        'remote-time': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'reuse-uri': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'retry-wait': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '0',
            required: true,
            min: 0,
            max: 600
        },
        'server-stat-of': {
            type: 'string'
        },
        'server-stat-timeout': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '86400'
        },
        'split': {
            type: 'integer',
            defaultValue: '5',
            required: true,
            min: 1
        },
        'stream-piece-selector': {
            type: 'option',
            options: ['default', 'inorder', 'random', 'geom'],
            defaultValue: 'default',
            required: true
        },
        'timeout': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '60',
            required: true,
            min: 1,
            max: 600
        },
        'uri-selector': {
            type: 'option',
            options: ['inorder', 'feedback', 'adaptive'],
            defaultValue: 'feedback',
            required: true
        },
        'check-certificate': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'http-accept-gzip': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'http-auth-challenge': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'http-no-cache': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'http-user': {
            type: 'string'
        },
        'http-passwd': {
            type: 'string'
        },
        'http-proxy': {
            type: 'string'
        },
        'http-proxy-user': {
            type: 'string'
        },
        'http-proxy-passwd': {
            type: 'string'
        },
        'https-proxy': {
            type: 'string'
        },
        'https-proxy-user': {
            type: 'string'
        },
        'https-proxy-passwd': {
            type: 'string'
        },
        'referer': {
            type: 'string'
        },
        'enable-http-keep-alive': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'enable-http-pipelining': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'header': {
            type: 'string'
        },
        'save-cookies': {
            type: 'string'
        },
        'use-head': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'user-agent': {
            type: 'string',
            defaultValue: 'aria2/$VERSION'
        },
        'ftp-user': {
            type: 'string',
            defaultValue: 'anonymous'
        },
        'ftp-passwd': {
            type: 'string',
            defaultValue: 'ARIA2USER@'
        },
        'ftp-pasv': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'ftp-proxy': {
            type: 'string'
        },
        'ftp-proxy-user': {
            type: 'string'
        },
        'ftp-proxy-passwd': {
            type: 'string'
        },
        'ftp-type': {
            type: 'option',
            options: ['binary', 'ascii'],
            defaultValue: 'binary',
            required: true
        },
        'ftp-reuse-connection': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'ssh-host-key-md': {
            type: 'string'
        },
        'show-files': {
            type: 'boolean',
            readonly: true
        },
        'bt-detach-seed-only': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'bt-enable-hook-after-hash-check': {
            since: '1.19.3',
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'bt-enable-lpd': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'bt-exclude-tracker': {
            type: 'text',
            split: ',',
            showCount: true
        },
        'bt-external-ip': {
            type: 'string'
        },
        'bt-force-encryption': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'bt-hash-check-seed': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'bt-max-open-files': {
            type: 'integer',
            defaultValue: '100',
            required: true,
            min: 1
        },
        'bt-max-peers': {
            type: 'integer',
            defaultValue: '55',
            required: true,
            min: 0
        },
        'bt-metadata-only': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'bt-min-crypto-level': {
            type: 'option',
            options: ['plain', 'arc4'],
            defaultValue: 'plain',
            required: true
        },
        'bt-prioritize-piece': {
            type: 'string'
        },
        'bt-remove-unselected-file': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'bt-require-crypto': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'bt-request-peer-speed-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '50K',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'bt-save-metadata': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'bt-seed-unverified': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'bt-stop-timeout': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '0',
            required: true,
            min: 0
        },
        'bt-tracker': {
            type: 'text',
            split: ',',
            showCount: true
        },
        'bt-tracker-connect-timeout': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '60',
            required: true,
            min: 1,
            max: 600
        },
        'bt-tracker-interval': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '0',
            required: true,
            min: 0
        },
        'bt-tracker-timeout': {
            type: 'integer',
            suffix: 'Seconds',
            defaultValue: '60',
            required: true,
            min: 1,
            max: 600
        },
        'dht-file-path': {
            type: 'string',
            readonly: true,
            defaultValue: '$HOME/.aria2/dht.dat'
        },
        'dht-file-path6': {
            type: 'string',
            readonly: true,
            defaultValue: '$HOME/.aria2/dht6.dat'
        },
        'dht-listen-port': {
            type: 'string',
            readonly: true,
            defaultValue: '6881-6999'
        },
        'dht-message-timeout': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '10'
        },
        'enable-dht': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'enable-dht6': {
            type: 'boolean',
            readonly: true
        },
        'enable-peer-exchange': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'follow-torrent': {
            type: 'option',
            options: ['true', 'false', 'mem'],
            defaultValue: 'true',
            required: true
        },
        'listen-port': {
            type: 'integer',
            readonly: true,
            defaultValue: '6881-6999'
        },
        'max-overall-upload-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'max-upload-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'peer-id-prefix': {
            type: 'string',
            readonly: true,
            defaultValue: 'A2-$MAJOR-$MINOR-$PATCH-'
        },
        'seed-ratio': {
            type: 'float',
            defaultValue: '1.0',
            required: true,
            min: 0
        },
        'seed-time': {
            type: 'float',
            suffix: 'Minutes',
            required: true,
            min: 0
        },
        'follow-metalink': {
            type: 'option',
            options: ['true', 'false', 'mem'],
            defaultValue: 'true',
            required: true
        },
        'metalink-base-uri': {
            type: 'string'
        },
        'metalink-language': {
            type: 'string'
        },
        'metalink-location': {
            type: 'string'
        },
        'metalink-os': {
            type: 'string'
        },
        'metalink-version': {
            type: 'string'
        },
        'metalink-preferred-protocol': {
            type: 'option',
            options: ['http', 'https', 'ftp', 'none'],
            defaultValue: 'none',
            required: true
        },
        'metalink-enable-unique-protocol': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'enable-rpc': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'pause-metadata': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'rpc-allow-origin-all': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'rpc-listen-all': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'rpc-listen-port': {
            type: 'integer',
            readonly: true,
            defaultValue: '6800'
        },
        'rpc-max-request-size': {
            type: 'string',
            suffix: 'Bytes',
            readonly: true,
            defaultValue: '2M'
        },
        'rpc-save-upload-metadata': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'rpc-secure': {
            type: 'boolean',
            readonly: true
        },
        'allow-overwrite': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'allow-piece-length-change': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'always-resume': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'async-dns': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'auto-file-renaming': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'auto-save-interval': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '60'
        },
        'conditional-get': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'conf-path': {
            type: 'string',
            readonly: true,
            defaultValue: '$HOME/.aria2/aria2.conf'
        },
        'console-log-level': {
            type: 'option',
            options: ['debug', 'info', 'notice', 'warn', 'error'],
            readonly: true,
            defaultValue: 'notice'
        },
        'daemon': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'deferred-input': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'disable-ipv6': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'disk-cache': {
            type: 'string',
            suffix: 'Bytes',
            readonly: true,
            defaultValue: '16M'
        },
        'download-result': {
            type: 'option',
            options: ['default', 'full', 'hide'],
            defaultValue: 'default',
            required: true
        },
        'dscp': {
            type: 'string',
            readonly: true
        },
        'rlimit-nofile': {
            type: 'string',
            readonly: true
        },
        'enable-color': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'enable-mmap': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'event-poll': {
            type: 'option',
            options: ['epoll', 'kqueue', 'port', 'poll', 'select'],
            readonly: true
        },
        'file-allocation': {
            type: 'option',
            options: ['none', 'prealloc', 'trunc', 'falloc'],
            defaultValue: 'prealloc',
            required: true
        },
        'force-save': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'save-not-found': {
            since: '1.27.0',
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'hash-check-only': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'human-readable': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'keep-unfinished-download-result': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'max-download-result': {
            type: 'integer',
            defaultValue: '1000',
            required: true,
            min: 0
        },
        'max-mmap-limit': {
            since: '1.20.0',
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '9223372036854775807',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'max-resume-failure-tries': {
            type: 'integer',
            defaultValue: '0',
            required: true,
            min: 0
        },
        'min-tls-version': {
            type: 'option',
            options: ['SSLv3', 'TLSv1', 'TLSv1.1', 'TLSv1.2'],
            readonly: true,
            defaultValue: 'TLSv1'
        },
        'log-level': {
            type: 'option',
            options: ['debug', 'info', 'notice', 'warn', 'error'],
            defaultValue: 'debug',
            required: true
        },
        'optimize-concurrent-downloads': {
            since: '1.22.0',
            type: 'string',
            defaultValue: 'false'
        },
        'piece-length': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '1M',
            required: true,
            pattern: '^(0|[1-9]\\d*M?)$'
        },
        'show-console-readout': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        },
        'summary-interval': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '60'
        },
        'max-overall-download-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'max-download-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '0',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'no-conf': {
            type: 'boolean',
            readonly: true
        },
        'no-file-allocation-limit': {
            type: 'string',
            suffix: 'Bytes',
            defaultValue: '5M',
            required: true,
            pattern: '^(0|[1-9]\\d*(K|M)?)$'
        },
        'parameterized-uri': {
            type: 'boolean',
            defaultValue: 'false',
            required: true
        },
        'quiet': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'false'
        },
        'realtime-chunk-checksum': {
            type: 'boolean',
            defaultValue: 'true',
            required: true
        },
        'remove-control-file': {
            type: 'boolean',
            required: true
        },
        'save-session': {
            type: 'string'
        },
        'save-session-interval': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '0'
        },
        'socket-recv-buffer-size': {
            since: '1.19.3',
            type: 'string',
            suffix: 'Bytes',
            readonly: true,
            defaultValue: '0'
        },
        'stop': {
            type: 'integer',
            suffix: 'Seconds',
            readonly: true,
            defaultValue: '0'
        },
        'truncate-console-readout': {
            type: 'boolean',
            readonly: true,
            defaultValue: 'true'
        }
    }).constant('aria2GlobalAvailableOptions', {
        basicOptions: [
            'dir', 'log', 'max-concurrent-downloads', 'check-integrity', 'continue'
        ],
        httpFtpSFtpOptions: [
            'all-proxy', 'all-proxy-user', 'all-proxy-passwd', 'connect-timeout', 'dry-run', 'lowest-speed-limit',
            'max-connection-per-server', 'max-file-not-found', 'max-tries', 'min-split-size', 'netrc-path', 'no-netrc',
            'no-proxy', 'proxy-method', 'remote-time', 'reuse-uri', 'retry-wait', 'server-stat-of',
            'server-stat-timeout', 'split', 'stream-piece-selector', 'timeout', 'uri-selector'
        ],
        httpOptions: [
            'check-certificate', 'http-accept-gzip', 'http-auth-challenge', 'http-no-cache', 'http-user',
            'http-passwd', 'http-proxy', 'http-proxy-user', 'http-proxy-passwd', 'https-proxy', 'https-proxy-user',
            'https-proxy-passwd', 'referer', 'enable-http-keep-alive', 'enable-http-pipelining', 'header',
            'save-cookies', 'use-head', 'user-agent'
        ],
        ftpSFtpOptions: [
            'ftp-user', 'ftp-passwd', 'ftp-pasv', 'ftp-proxy', 'ftp-proxy-user', 'ftp-proxy-passwd',
            'ftp-type', 'ftp-reuse-connection', 'ssh-host-key-md'
        ],
        btOptions: [
            'bt-detach-seed-only', 'bt-enable-hook-after-hash-check', 'bt-enable-lpd', 'bt-exclude-tracker',
            'bt-external-ip', 'bt-force-encryption', 'bt-hash-check-seed', 'bt-max-open-files', 'bt-max-peers',
            'bt-metadata-only', 'bt-min-crypto-level', 'bt-prioritize-piece', 'bt-remove-unselected-file',
            'bt-require-crypto', 'bt-request-peer-speed-limit', 'bt-save-metadata', 'bt-seed-unverified',
            'bt-stop-timeout', 'bt-tracker', 'bt-tracker-connect-timeout', 'bt-tracker-interval', 'bt-tracker-timeout',
            'dht-file-path', 'dht-file-path6', 'dht-listen-port', 'dht-message-timeout', 'enable-dht', 'enable-dht6',
            'enable-peer-exchange', 'follow-torrent', 'listen-port', 'max-overall-upload-limit', 'max-upload-limit',
            'peer-id-prefix', 'seed-ratio', 'seed-time'
        ],
        metalinkOptions: [
            'follow-metalink', 'metalink-base-uri', 'metalink-language', 'metalink-location', 'metalink-os',
            'metalink-version', 'metalink-preferred-protocol', 'metalink-enable-unique-protocol'
        ],
        rpcOptions: [
            'enable-rpc', 'pause-metadata', 'rpc-allow-origin-all', 'rpc-listen-all', 'rpc-listen-port',
            'rpc-max-request-size', 'rpc-save-upload-metadata', 'rpc-secure'
        ],
        advancedOptions: [
            'allow-overwrite', 'allow-piece-length-change', 'always-resume', 'async-dns', 'auto-file-renaming',
            'auto-save-interval', 'conditional-get', 'conf-path', 'console-log-level', 'daemon', 'deferred-input',
            'disable-ipv6', 'disk-cache', 'download-result', 'dscp', 'rlimit-nofile', 'enable-color', 'enable-mmap',
            'event-poll', 'file-allocation', 'force-save', 'save-not-found', 'hash-check-only', 'human-readable',
            'keep-unfinished-download-result', 'max-download-result', 'max-mmap-limit', 'max-resume-failure-tries',
            'min-tls-version', 'log-level', 'optimize-concurrent-downloads', 'piece-length', 'show-console-readout',
            'summary-interval', 'max-overall-download-limit', 'max-download-limit', 'no-conf',
            'no-file-allocation-limit', 'parameterized-uri', 'quiet', 'realtime-chunk-checksum', 'remove-control-file',
            'save-session', 'save-session-interval', 'socket-recv-buffer-size', 'stop', 'truncate-console-readout'
        ]
    }).constant('aria2TaskAvailableOptions', {
        taskOptions: [
            {
                key: 'dir',
                newOnly: true
            },
            {
                key: 'out',
                httpOnly: true,
                newOnly: true
            },
            {
                key: 'allow-overwrite',
                newOnly: true
            },
            {
                key: 'max-download-limit'
            },
            {
                key: 'max-upload-limit',
                btOnly: true
            },
            {
                key: 'split',
                httpOnly: true,
                activeReadonly: true
            },
            {
                key: 'min-split-size',
                httpOnly: true,
                activeReadonly: true
            },
            {
                key: 'max-connection-per-server',
                httpOnly: true,
                activeReadonly: true
            },
            {
                key: 'lowest-speed-limit',
                httpOnly: true,
                activeReadonly: true
            },
            {
                key: 'stream-piece-selector',
                httpOnly: true,
                activeReadonly: true
            },
            {
                key: 'all-proxy',
                httpOnly: true,
                activeReadonly: true
            },
            {
                key: 'all-proxy-user',
                httpOnly: true,
                activeReadonly: true
            },
            {
                key: 'all-proxy-passwd',
                httpOnly: true,
                activeReadonly: true
            },
            {
                key: 'header',
                httpOnly: true,
                newOnly: true
            },
            {
                key: 'bt-max-peers',
                btOnly: true
            },
            {
                key: 'bt-request-peer-speed-limit',
                btOnly: true
            },
            {
                key: 'bt-remove-unselected-file',
                btOnly: true
            },
            {
                key: 'bt-stop-timeout',
                btOnly: true,
                activeReadonly: true
            },
            {
                key: 'bt-tracker',
                btOnly: true,
                activeReadonly: true
            },
            {
                key: 'seed-ratio',
                btOnly: true,
                activeReadonly: true
            },
            {
                key: 'seed-time',
                btOnly: true,
                activeReadonly: true
            },
            {
                key: 'conditional-get',
                newOnly: true
            },
            {
                key: 'file-allocation',
                newOnly: true
            },
            {
                key: 'parameterized-uri ',
                newOnly: true
            },
            {
                key: 'force-save'
            }
        ]
    });
}());
