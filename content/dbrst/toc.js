define(
{
    "reducedVersion":true,
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"About the REST APIs",
                    "href":"index.html"
                },
                {
                    "title":"All REST Endpoints",
                    "href":"rest-endpoints.html"
                }
            ]
        },
        {
            "heading":"Get Started",
            "topics":[
                {
                    "title":"Quick Start",
                    "href":"QuickStart.html"
                },
                {
                    "title":"Supported Methods",
                    "href":"supported-methods.html"
                },
                {
                    "title":"Status Codes",
                    "href":"Status-Codes.html"
                },
                {
                    "title":"Authentication",
                    "href":"Authentication.html",
                    "topics":[
                        {
                            "title":"Authentication for Fleet Patching and Provisioning",
                            "href":"Authentication-RHP.html"
                        }
                    ]
                },
                {
                    "title":"Use cURL",
                    "href":"Use-cURL.html"
                }
            ]
        },
        {
            "heading":"Tasks",
            "topics":[
                {
                    "title":"Data Dictionary",
                    "href":"api-data-dictionary.html",
                    "topics":[
                        {
                            "title":"Get a database link",
                            "href":"op-database-db_links-owner-db_link-get.html"
                        },
                        {
                            "title":"Get a partition",
                            "href":"op-database-objects-partitions-table_owner-table_name-partition_name-get.html"
                        },
                        {
                            "title":"Get a procedure that is defined in package",
                            "href":"op-database-objects-packages-procedures-object_id-subprogram_id-get.html"
                        },
                        {
                            "title":"Get a specific column",
                            "href":"op-database-objects-columns-owner-table_name-column_name-get.html"
                        },
                        {
                            "title":"Get a specific foreign keys",
                            "href":"op-database-objects-foreign_keys-owner-constraint_name-get.html"
                        },
                        {
                            "title":"Get a specific function",
                            "href":"op-database-objects-functions-object_id-get.html"
                        },
                        {
                            "title":"Get a specific index",
                            "href":"op-database-objects-indexes-owner-index_name-get.html"
                        },
                        {
                            "title":"Get a specific object",
                            "href":"op-database-objects-owner-object_name-object_type-get.html"
                        },
                        {
                            "title":"Get a specific table",
                            "href":"op-database-objects-tables-owner-table_name-get.html"
                        },
                        {
                            "title":"Get a synonym",
                            "href":"op-database-objects-synonyms-owner-synonym_name-get.html"
                        },
                        {
                            "title":"Get all arguments for functions and procedures",
                            "href":"op-database-objects-arguments-get.html"
                        },
                        {
                            "title":"Get all database links",
                            "href":"op-database-db_links-get.html"
                        },
                        {
                            "title":"Get all database objects",
                            "href":"op-database-objects-get.html"
                        },
                        {
                            "title":"Get all foreign keys",
                            "href":"op-database-objects-foreign_keys-get.html"
                        },
                        {
                            "title":"Get all functions",
                            "href":"op-database-objects-functions-get.html"
                        },
                        {
                            "title":"Get all indexes",
                            "href":"op-database-objects-indexes-get.html"
                        },
                        {
                            "title":"Get all materialized view logs",
                            "href":"op-database-objects-materialized_view_logs-get.html"
                        },
                        {
                            "title":"Get all object types",
                            "href":"op-database-objects-types-get.html"
                        },
                        {
                            "title":"Get all partitions in the database",
                            "href":"op-database-objects-partitions-get.html"
                        },
                        {
                            "title":"Get all procedures defined in package",
                            "href":"op-database-objects-packages-procedures-get.html"
                        },
                        {
                            "title":"Get all synonyms in the database",
                            "href":"op-database-objects-synonyms-get.html"
                        },
                        {
                            "title":"Get all table columns",
                            "href":"op-database-objects-columns-get.html"
                        },
                        {
                            "title":"Get all tables",
                            "href":"op-database-objects-tables-get.html"
                        },
                        {
                            "title":"Get an argument",
                            "href":"op-database-objects-arguments-object_id-subprogram_id-argument_name-get.html"
                        },
                        {
                            "title":"Get an object type",
                            "href":"op-database-objects-types-owner-type_name-get.html"
                        },
                        {
                            "title":"Get information on a specific materialized view log",
                            "href":"op-database-objects-materialized_view_logs-log_owner-log_table-get.html"
                        }
                    ]
                },
                {
                    "title":"Environment",
                    "href":"api-environment.html",
                    "topics":[
                        {
                            "title":"Create a new database in the default Oracle Home",
                            "href":"op-environment-databases-post.html"
                        },
                        {
                            "title":"Create a new database in the specified Oracle Home",
                            "href":"op-environment-homes-homename-databases-post.html"
                        },
                        {
                            "title":"Create a new DBCA job in the default Oracle Home",
                            "href":"op-environment-dbca-jobs-post.html"
                        },
                        {
                            "title":"Create a new DBCA job in the Oracle Home",
                            "href":"op-environment-homes-homename-dbca-jobs-post.html"
                        },
                        {
                            "title":"Delete the specified DBCA job in the default Oracle Home",
                            "href":"op-environment-dbca-jobs-jobid-delete.html"
                        },
                        {
                            "title":"Delete the specified DBCA job in the default Oracle Home",
                            "href":"op-environment-homes-homename-dbca-jobs-jobid-delete.html"
                        },
                        {
                            "title":"Get a list of the databases defined in an Oracle Home",
                            "href":"op-environment-homes-homename-databases-get.html"
                        },
                        {
                            "title":"Get a list of the databases defined in the default Oracle Home",
                            "href":"op-environment-databases-get.html"
                        },
                        {
                            "title":"Get a list of the DBCA database templates defined in an Oracle Home",
                            "href":"op-environment-homes-homename-dbca-templates-get.html"
                        },
                        {
                            "title":"Get a list of the DBCA database templates defined in the default Oracle Home",
                            "href":"op-environment-dbca-templates-get.html"
                        },
                        {
                            "title":"Get a list of the DBCA jobs created through ORDS Database API in the default Oracle Home",
                            "href":"op-environment-dbca-jobs-get.html"
                        },
                        {
                            "title":"Get a list of the DBCA jobs created through ORDS Database API in the Oracle Home",
                            "href":"op-environment-homes-homename-dbca-jobs-get.html"
                        },
                        {
                            "title":"Get a specific database defined in a specific Oracle Home",
                            "href":"op-environment-homes-homename-databases-databasename-get.html"
                        },
                        {
                            "title":"Get a specific database defined in the default Oracle Home",
                            "href":"op-environment-databases-databasename-get.html"
                        },
                        {
                            "title":"Get a specific database template file in a specific Oracle Home",
                            "href":"op-environment-homes-homename-dbca-templates-filename-get.html"
                        },
                        {
                            "title":"Get a specific database template file in the default Oracle Home",
                            "href":"op-environment-dbca-templates-filename-get.html"
                        },
                        {
                            "title":"Get a specified DBCA jobs created through ORDS Database API in the default Oracle Home",
                            "href":"op-environment-dbca-jobs-jobid-get.html"
                        },
                        {
                            "title":"Get a specified DBCA jobs created through ORDS Database API in the specified Oracle Home",
                            "href":"op-environment-homes-homename-dbca-jobs-jobid-get.html"
                        },
                        {
                            "title":"Get database Oracle Homes",
                            "href":"op-environment-homes-get.html"
                        },
                        {
                            "title":"Get the DBCA log file content for a specified DBCA jobs created through ORDS Database API in the default Oracle Home",
                            "href":"op-environment-dbca-jobs-jobid-log-get.html"
                        },
                        {
                            "title":"Get the DBCA log file content for a specified DBCA jobs created through ORDS Database API in the specified Oracle Home",
                            "href":"op-environment-homes-homename-dbca-jobs-jobid-log-get.html"
                        }
                    ]
                },
                {
                    "title":"Fleet Patching and Provisioning",
                    "topics":[
                        {
                            "title":"RHP - Manage Gold Images",
                            "href":"api-fleet-patching-and-provisioning-rhp-manage-gold-images.html",
                            "topics":[
                                {
                                    "title":"Add a new image series",
                                    "href":"op-series-seriesid-post.html"
                                },
                                {
                                    "title":"Add image to series",
                                    "href":"op-series-seriesid-images-imageid-post.html"
                                },
                                {
                                    "title":"Delete image series",
                                    "href":"op-series-seriesid-delete.html"
                                },
                                {
                                    "title":"Deletes the specified image name",
                                    "href":"op-images-imageid-delete.html"
                                },
                                {
                                    "title":"Display the configuration of the specified image",
                                    "href":"op-images-imageid-get.html"
                                },
                                {
                                    "title":"Get all the series",
                                    "href":"op-series-get.html"
                                },
                                {
                                    "title":"Get image series",
                                    "href":"op-series-seriesid-get.html"
                                },
                                {
                                    "title":"Lists all the gold images",
                                    "href":"op-images-get.html"
                                },
                                {
                                    "title":"Lists all the gold images that matches the specified query parameters.",
                                    "href":"op-images-search-get.html"
                                },
                                {
                                    "title":"Remove image from series",
                                    "href":"op-series-seriesid-images-imageid-delete.html"
                                },
                                {
                                    "title":"Schedules an import image operation",
                                    "href":"op-images-post.html"
                                },
                                {
                                    "title":"Search series matching certain parameters",
                                    "href":"op-series-search-get.html"
                                },
                                {
                                    "title":"Subscribe a user to a series",
                                    "href":"op-series-seriesid-users-userid-post.html"
                                },
                                {
                                    "title":"Unsubscribe a user from a series",
                                    "href":"op-series-seriesid-users-userid-delete.html"
                                }
                            ]
                        },
                        {
                            "title":"RHP - Manage Operation Results",
                            "href":"api-fleet-patching-and-provisioning-rhp-manage-operation-results.html",
                            "topics":[
                                {
                                    "title":"Get all the jobs",
                                    "href":"op-jobs-get.html"
                                },
                                {
                                    "title":"Get job details",
                                    "href":"op-jobs-jobid-get.html"
                                },
                                {
                                    "title":"Get the job output and result",
                                    "href":"op-jobs-jobid-output-get.html"
                                }
                            ]
                        },
                        {
                            "title":"RHP - Patch Software homes",
                            "href":"api-fleet-patching-and-provisioning-rhp-patch-software-homes.html",
                            "topics":[
                                {
                                    "title":"Patch an Oracle Database Software home",
                                    "href":"op-workingcopies-workingcopyid-databases-patch.html"
                                },
                                {
                                    "title":"Patch Grid Infrastructure Software home",
                                    "href":"op-workingcopies-workingcopyid-gihome-destwcid-patch.html"
                                }
                            ]
                        },
                        {
                            "title":"RHP - Patch Unmanaged Software Homes",
                            "href":"api-fleet-patching-and-provisioning-rhp-patch-unmanaged-software-homes.html",
                            "topics":[
                                {
                                    "title":"Patch an unmanaged Oracle Database Software home",
                                    "href":"op-databases-patch.html"
                                },
                                {
                                    "title":"Patch unmanaged Grid Infrastructure Software home",
                                    "href":"op-gihome-destwcid-patch.html"
                                }
                            ]
                        },
                        {
                            "title":"RHP - Provisioning Software homes",
                            "href":"api-fleet-patching-and-provisioning-rhp-provisioning-software-homes.html",
                            "topics":[
                                {
                                    "title":"Create Oracle Database Software",
                                    "href":"op-workingcopies-workingcopyid-databases-post.html"
                                },
                                {
                                    "title":"Create working copy",
                                    "href":"op-workingcopies-post.html"
                                },
                                {
                                    "title":"Delete working copy",
                                    "href":"op-workingcopies-workingcopyid-delete.html"
                                },
                                {
                                    "title":"Get all working copies",
                                    "href":"op-workingcopies-get.html"
                                },
                                {
                                    "title":"Get working copies based on a certain image type",
                                    "href":"op-workingcopies-imagetypes-imagetype-get.html"
                                },
                                {
                                    "title":"Get working copy details",
                                    "href":"op-workingcopies-workingcopyid-get.html"
                                },
                                {
                                    "title":"Search working copies",
                                    "href":"op-workingcopies-search-get.html"
                                }
                            ]
                        },
                        {
                            "title":"RHP - Upgrade Software homes",
                            "href":"api-fleet-patching-and-provisioning-rhp-upgrade-software-homes.html",
                            "topics":[
                                {
                                    "title":"Upgrade an Oracle Database Software home",
                                    "href":"op-workingcopies-workingcopyid-databases-dbuniquename-put.html"
                                },
                                {
                                    "title":"Upgrade Grid Infrastructure Software home",
                                    "href":"op-workingcopies-workingcopyid-gihome-destwcid-put.html"
                                }
                            ]
                        },
                        {
                            "title":"RHP - Upgrade Unmanaged Software Homes",
                            "href":"api-fleet-patching-and-provisioning-rhp-upgrade-unmanaged-software-homes.html",
                            "topics":[
                                {
                                    "title":"Upgrade an unmanaged Oracle Database Software home",
                                    "href":"op-databases-dbuniquename-put.html"
                                },
                                {
                                    "title":"Upgrade unmanaged Grid Infrastructure Software home",
                                    "href":"op-gihome-destwcid-put.html"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"General",
                    "href":"api-general.html",
                    "topics":[
                        {
                            "title":"Create a data pump job",
                            "href":"op-database-datapump-jobs-post.html"
                        },
                        {
                            "title":"Create an export data pump job",
                            "href":"op-database-datapump-export-post.html"
                        },
                        {
                            "title":"Create an import data pump job",
                            "href":"op-database-datapump-import-post.html"
                        },
                        {
                            "title":"Get a database component",
                            "href":"op-database-components-comp_id-get.html"
                        },
                        {
                            "title":"Get a description of a specific local listener for this database",
                            "href":"op-database-connections-host_name-port-service_name-get.html"
                        },
                        {
                            "title":"Get a description of all local listeners for this database",
                            "href":"op-database-connections-get.html"
                        },
                        {
                            "title":"Get a file for a specific data pump job",
                            "href":"op-database-datapump-jobs-owner_name-job_name-filename-get.html"
                        },
                        {
                            "title":"Get a specific data pump job",
                            "href":"op-database-datapump-jobs-owner_name-job_name-get.html"
                        },
                        {
                            "title":"Get a specific database parameter",
                            "href":"op-database-parameters-name-get.html"
                        },
                        {
                            "title":"Get a specific database user",
                            "href":"op-database-security-users-username-get.html"
                        },
                        {
                            "title":"Get a tablespace",
                            "href":"op-database-storage-tablespaces-tablespace_name-get.html"
                        },
                        {
                            "title":"Get a tablespace segment",
                            "href":"op-database-storage-tablespaces-tablespace_name-segments-segment_name-get.html"
                        },
                        {
                            "title":"Get all data pump jobs",
                            "href":"op-database-datapump-jobs-get.html"
                        },
                        {
                            "title":"Get all database components",
                            "href":"op-database-components-get.html"
                        },
                        {
                            "title":"Get all database parameters",
                            "href":"op-database-parameters-get.html"
                        },
                        {
                            "title":"Get all database users",
                            "href":"op-database-security-users-get.html"
                        },
                        {
                            "title":"Get all feature usage statistics",
                            "href":"op-database-feature_usage-get.html"
                        },
                        {
                            "title":"Get all tablespaces",
                            "href":"op-database-storage-tablespaces-get.html"
                        },
                        {
                            "title":"Get data file usage summary for a specific tablespace",
                            "href":"op-database-storage-tablespaces-tablespace_name-datafiles_usage-get.html"
                        },
                        {
                            "title":"Get data files for a tablespace",
                            "href":"op-database-storage-tablespaces-tablespace_name-datafiles-get.html"
                        },
                        {
                            "title":"Get database status",
                            "href":"op-database-status-get.html"
                        },
                        {
                            "title":"Get database version",
                            "href":"op-database-version-get.html"
                        },
                        {
                            "title":"Get specific database Oracle Home",
                            "href":"op-environment-homes-homename-get.html"
                        },
                        {
                            "title":"Get storage statistics",
                            "href":"op-database-storage-bytes-get.html"
                        },
                        {
                            "title":"Get tablespace data file",
                            "href":"op-database-storage-tablespaces-tablespace_name-datafiles-file_id-get.html"
                        },
                        {
                            "title":"Get tablespace data file usage",
                            "href":"op-database-storage-tablespaces-tablespace_name-datafiles-file_id-usage-get.html"
                        },
                        {
                            "title":"Get tablespace segments",
                            "href":"op-database-storage-tablespaces-tablespace_name-segments-get.html"
                        },
                        {
                            "title":"Get tablespace space usage history",
                            "href":"op-database-storage-tablespaces-tablespace_name-history-get.html"
                        },
                        {
                            "title":"Get tablespace temporary file",
                            "href":"op-database-storage-tablespaces-tablespace_name-tempfiles-file_id-get.html"
                        },
                        {
                            "title":"Get tablespace temporary file usage",
                            "href":"op-database-storage-tablespaces-tablespace_name-tempfiles-file_id-usage-get.html"
                        },
                        {
                            "title":"Get temporary file usage summary for a specific tablespace",
                            "href":"op-database-storage-tablespaces-tablespace_name-tempfiles_usage-get.html"
                        },
                        {
                            "title":"Get temporary files for a tablespace",
                            "href":"op-database-storage-tablespaces-tablespace_name-tempfiles-get.html"
                        },
                        {
                            "title":"Get usage statistic for a feature",
                            "href":"op-database-feature_usage-dbid-name-get.html"
                        }
                    ]
                },
                {
                    "title":"Monitoring",
                    "href":"api-monitoring.html",
                    "topics":[
                        {
                            "title":"Get a session",
                            "href":"op-database-monitoring-sessions-sid-serial_number-get.html"
                        },
                        {
                            "title":"Get a session lock that is blocking other sessions",
                            "href":"op-database-monitoring-session_locks-holding-session_id-lock_id1-lock_id2-get.html"
                        },
                        {
                            "title":"Get a specific lock that a session is waiting on",
                            "href":"op-database-monitoring-session_locks-waiting-session_id-lock_id1-lock_id2-get.html"
                        },
                        {
                            "title":"Get a specific session lock record",
                            "href":"op-database-monitoring-session_locks-session_id-lock_id1-lock_id2-get.html"
                        },
                        {
                            "title":"Get a specific session wait",
                            "href":"op-database-monitoring-session_waits-sid-seq_number-get.html"
                        },
                        {
                            "title":"Get a specific session wait class record",
                            "href":"op-database-monitoring-session_wait_classes-sid-serial_number-wait_class_number-get.html"
                        },
                        {
                            "title":"Get all alerts",
                            "href":"op-database-monitoring-alerts-get.html"
                        },
                        {
                            "title":"Get all current sessions",
                            "href":"op-database-monitoring-sessions-get.html"
                        },
                        {
                            "title":"Get all locks held in the database",
                            "href":"op-database-monitoring-session_locks-get.html"
                        },
                        {
                            "title":"Get all locks that are blocking other sessions",
                            "href":"op-database-monitoring-session_locks-holding-get.html"
                        },
                        {
                            "title":"Get all locks that sessions are waiting on",
                            "href":"op-database-monitoring-session_locks-waiting-get.html"
                        },
                        {
                            "title":"Get all long running operations for a session",
                            "href":"op-database-monitoring-sessions-sid-serial_number-long_running_operations-get.html"
                        },
                        {
                            "title":"Get all session limits",
                            "href":"op-database-monitoring-session_limits-get.html"
                        },
                        {
                            "title":"Get all session wait class records",
                            "href":"op-database-monitoring-session_wait_classes-get.html"
                        },
                        {
                            "title":"Get all session waits",
                            "href":"op-database-monitoring-session_waits-get.html"
                        },
                        {
                            "title":"Get all wait class metrics",
                            "href":"op-database-monitoring-wait_class_metrics-get.html"
                        },
                        {
                            "title":"Get an alert record",
                            "href":"op-database-monitoring-alerts-record_id-get.html"
                        },
                        {
                            "title":"Get count of alerts by message level",
                            "href":"op-database-monitoring-alerts_summaries-by_message_level-get.html"
                        },
                        {
                            "title":"Get count of alerts by message type",
                            "href":"op-database-monitoring-alerts_summaries-by_message_type-get.html"
                        },
                        {
                            "title":"Get count of different session types",
                            "href":"op-database-monitoring-session_summaries-by_type-get.html"
                        },
                        {
                            "title":"Get count of recent alerts by message level",
                            "href":"op-database-monitoring-alerts_recent_summaries-by_message_level-get.html"
                        },
                        {
                            "title":"Get count of recent alerts by message type",
                            "href":"op-database-monitoring-alerts_recent_summaries-by_message_type-get.html"
                        },
                        {
                            "title":"Get current active process for a session",
                            "href":"op-database-monitoring-sessions-sid-serial_number-process-get.html"
                        },
                        {
                            "title":"Get time totals for all registered wait classes",
                            "href":"op-database-monitoring-wait_class_totals-get.html"
                        },
                        {
                            "title":"Get wait time summary from recent active session history records",
                            "href":"op-database-monitoring-waits_recent-get.html"
                        }
                    ]
                },
                {
                    "title":"Performance",
                    "href":"api-performance.html",
                    "topics":[
                        {
                            "title":"Get a specified sampled session activity in the database",
                            "href":"op-database-performance-active_sessions_history-sample_id-get.html"
                        },
                        {
                            "title":"Get all sampled session activity in the database",
                            "href":"op-database-performance-active_sessions_history-get.html"
                        },
                        {
                            "title":"Get all SQL statements ordered by CPU time descending",
                            "href":"op-database-performance-top_sql_statements-get.html"
                        },
                        {
                            "title":"Get execution plan for an SQL Statement",
                            "href":"op-database-performance-sql_statements-sql_id-plan-get.html"
                        },
                        {
                            "title":"Get historical statistics for a SQL statement",
                            "href":"op-database-performance-sql_statements-sql_id-history-get.html"
                        },
                        {
                            "title":"Get information on a monitored statement",
                            "href":"op-database-performance-sql_statements-sql_id-monitor-sql_exec_id-sql_exec_start-get.html"
                        },
                        {
                            "title":"Get monitoring statistics for a SQL Statement",
                            "href":"op-database-performance-sql_statements-sql_id-monitor-get.html"
                        },
                        {
                            "title":"Get parallel execution information for specific statement execution",
                            "href":"op-database-performance-sql_statements-sql_id-monitor-sql_exec_id-sql_exec_start-parallelism-get.html"
                        },
                        {
                            "title":"Get SQL statement",
                            "href":"op-database-performance-sql_statements-sql_id-text-get.html"
                        },
                        {
                            "title":"Get SQL statistics for a specific session",
                            "href":"op-database-performance-active_sessions_history_waits-sid-seq_number-active_sql-get.html"
                        },
                        {
                            "title":"Get SQL statistics maximum values",
                            "href":"op-database-performance-top_sql_statements-maximums-get.html"
                        },
                        {
                            "title":"Get statistics for a SQL statement",
                            "href":"op-database-performance-sql_statements-sql_id-get.html"
                        },
                        {
                            "title":"Get statistics for all SQL statements",
                            "href":"op-database-performance-sql_statements-get.html"
                        },
                        {
                            "title":"Get the last 10 wait events for each active session",
                            "href":"op-database-performance-active_sessions_history_waits-get.html"
                        },
                        {
                            "title":"Get the specified wait event for specific active session",
                            "href":"op-database-performance-active_sessions_history_waits-sid-seq_number-get.html"
                        }
                    ]
                },
                {
                    "title":"Pluggable Database Lifecycle Management",
                    "href":"api-pluggable-database-lifecycle-management.html",
                    "topics":[
                        {
                            "title":"Change the state of a PDB",
                            "href":"op-database-pdbs-pdb_name-status-post.html"
                        },
                        {
                            "title":"Clone or Unplug operations for PDBs",
                            "href":"op-database-pdbs-pdb_name-post.html"
                        },
                        {
                            "title":"Create a PDB from PDB$SEED or XML",
                            "href":"op-database-pdbs-post.html"
                        },
                        {
                            "title":"Drop a PDB",
                            "href":"op-database-pdbs-pdb_name-delete.html"
                        },
                        {
                            "title":"Get a pluggable database",
                            "href":"op-database-pdbs-pdb_name-get.html"
                        },
                        {
                            "title":"Get all pluggable databases",
                            "href":"op-database-pdbs-get.html"
                        },
                        {
                            "title":"Return status information of a PDB",
                            "href":"op-database-pdbs-pdb_name-status-get.html"
                        }
                    ]
                }
            ]
        }
    ]
});