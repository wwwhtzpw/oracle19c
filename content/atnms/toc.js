define(
{
    "reducedVersion":true,
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"List of Figures",
                    "href":"lof.html"
                },
                {
                    "title":"List of Tables",
                    "href":"lot.html"
                },
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-7D3491E2-0173-40F7-BC81-3E05BB61D607"
                },
                {
                    "title":"Changes in this Release for Autonomous Health Framework Users Guide 19c",
                    "href":"ahf-19c-changes.html#GUID-8CE74FDD-8A0E-4F46-9ED4-1B6978C687EF"
                },
                {
                    "title":"<span class=\"secnum\">1 </span> Introduction to Oracle Autonomous Health Framework",
                    "href":"autonomous-health-framework.html#GUID-22A9CFB5-0AEA-46AB-9DA7-62CC2D421DAF",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">1.1 </span> Oracle Autonomous Health Framework Problem and Solution Space",
                            "href":"autonomous-health-framework-problem-and-solution-space.html#GUID-55AD507C-0D79-4ADB-A4F7-4E7B9312A364"
                        },
                        {
                            "title":"<span class=\"secnum\">1.2 </span> Components of Autonomous Health Framework",
                            "href":"components-ahf.html#GUID-9EB9BE42-7DEF-4BDD-A59C-01BD6CE285EE",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.2.1 </span> Introduction to Oracle ORAchk and Oracle EXAchk",
                                    "href":"introduction-orachk-and-exachk.html#GUID-3714EC33-B0C9-45BC-BC46-869D6B7C8AF7"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.2 </span> Introduction to Cluster Health Monitor",
                                    "href":"introduction-cluster-health-monitor.html#GUID-F0C38D19-995C-48FF-AB78-E0BE021F9946"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.3 </span> Introduction to Oracle Trace File Analyzer",
                                    "href":"introduction-oracle-trace-file-analyzer.html#GUID-6A08EA65-0F7A-459A-B418-6D812458DEC0"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.4 </span> Introduction to Oracle Cluster Health Advisor",
                                    "href":"cluster-health-advisor.html#GUID-464029A9-AE1D-4F6A-B75E-4E85A2DE9901"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.5 </span> Introduction to Memory Guard",
                                    "href":"memory-guard.html#GUID-9B5CB7F7-6608-4E6C-A5F6-50E758BE1F0E"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.6 </span> Introduction to Hang Manager",
                                    "href":"hang-manager.html#GUID-6E2043A6-E460-4442-A6F7-088206563D5E"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.2.7 </span> Introduction to Oracle Database Quality of Service (QoS) Management",
                                    "href":"oracle-database-qos-mgmt.html#GUID-505C28F6-5B66-4935-9167-B15960E3DD71"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part I Analyzing the Cluster Configuration",
                    "href":"analyzing-risks-and-complying-best-practices.html#GUID-12698473-E129-4836-A93F-C173D69492A6",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">2 </span> Analyzing Risks and Complying with Best Practices",
                            "href":"purpose-oracle-orachk-and-oracle-exachk.html#GUID-4572F794-E977-4002-8C38-E86B2FDA0D31",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.1 </span> Using Oracle ORAchk and Oracle EXAchk to Automatically Check for Risks and System Health",
                                    "href":"automated-daemon-mode-operation.html#GUID-A7091FEF-C98F-46B8-955E-6589D3F00CE0"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2 </span> Email Notification and Health Check Report Overview",
                                    "href":"email-notification-and-report-overview.html#GUID-C7BBD05F-70F8-4AD3-9EC7-1CED346C318A"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3 </span> Configuring Oracle ORAchk and Oracle EXAchk",
                                    "href":"config-orachk-and-exachk.html#GUID-A200608B-1597-405B-A270-EA288B568D74",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.3.1 </span> Deciding Which User Should Run Oracle ORAchk or Oracle EXAchk",
                                            "href":"deciding-which-user-should-run-orachk-and-exachk.html#GUID-F8E6EC7F-F7FE-4B4B-820A-8A0C882B86AB"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.3.2 </span> Handling of Root Passwords",
                                            "href":"handling-root-passwords.html#GUID-BB9C3176-CA7C-49DC-A009-06143F60AD2A"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.3.3 </span> Configuring Email Notification System",
                                            "href":"config-email-notification-system.html#GUID-8542ABA2-AB70-42E6-80D7-E261E21D1B68"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.4 </span> Using Oracle ORAchk and Oracle EXAchk to Manually Generate Health Check Reports",
                                    "href":"manually-generate-health-check-reports.html#GUID-F70634F5-89EA-484E-AA56-EBD129D8B218",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.4.1 </span> Running Health Checks On-Demand",
                                            "href":"ondemand-mode-operation.html#GUID-C6DE7768-058F-4460-9DB8-F30A81DB7763"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.4.2 </span> Running Health Checks in Silent Mode",
                                            "href":"silent-mode-operation.html#GUID-82AEFE23-908D-42EA-8BD5-480C24A52F7A"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.4.3 </span> Running On-Demand With or Without the Daemon",
                                            "href":"running-ondemand-daemon.html#GUID-D556F0FA-9EC4-4E5F-B100-2A94CDD60961"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.4.4 </span> Generating a Diff Report",
                                            "href":"generating-diff-report.html#GUID-2D3C236F-B7C6-43D0-882C-5C39D82CB6C7"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.4.5 </span> Sending Results by Email",
                                            "href":"sending-results-by-email.html#GUID-B9608CFC-B5E1-45C0-846C-458837BFA648"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5 </span> Managing the Oracle ORAchk and Oracle EXAchk Daemons",
                                    "href":"managing-daemons.html#GUID-CBC922F4-9260-48A1-86D4-209520F950D9",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.5.1 </span> Starting and Stopping the Daemon",
                                            "href":"starting-stopping-daemon.html#GUID-AD2B1FAE-2B77-4F05-92E7-D617C2531979"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.2 </span> Configuring the Daemon for Automatic Restart",
                                            "href":"configuring-daemon-automatic-restart.html#GUID-236A2842-667B-4789-80DA-11273B338C07"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.3 </span> Setting and Getting Options for the Daemon",
                                            "href":"setting-getting-daemon-options.html#GUID-79AE969A-A396-4A14-B33D-CB5AEA2C4498"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.4 </span> Querying the Status and Next Planned Daemon Run",
                                            "href":"querying-status.html#GUID-C5CD8D7E-FAEB-46D4-8464-4A5E2FFC2F91"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6 </span> Tracking Support Incidents",
                                    "href":"tracking-support-incidents.html#GUID-148AD83D-404B-4FDC-B1C6-E24C27151830"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.7 </span> Tracking File Attribute Changes and Comparing Snapshots",
                                    "href":"track-file-attr-changes-and-comparing-snaps.html#GUID-A78532EF-E4D8-4643-B11A-7E962A0CF15D"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.8 </span> Collecting and Consuming Health Check Data",
                                    "href":"collection-manager.html#GUID-CD30FDBD-47B9-4234-974D-836A0E13275E"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.9 </span> Locking and Unlocking Storage Server Cells",
                                    "href":"lock-unlock-storage-server-cells.html#GUID-D1A09672-75D0-49D8-BB48-0A69A092BDB1"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.10 </span> Integrating Health Check Results with Other Tools",
                                    "href":"integrating-health-check-results-other-tools.html#GUID-8A1C9B76-57D3-4D4D-BC2A-236801B400A0"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.11 </span> Configuring Oracle REST Data Services (ORDS)",
                                    "href":"configuring-oracle-rest-data-services.html#GUID-7C8BEBDC-5125-4493-A8FC-799023FAFC06"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.12 </span> Using Oracle ORAchk or Oracle EXAchk over REST",
                                    "href":"using-orachk-or-exachk-over-rest.html#GUID-45CA5280-B10A-42C5-8C90-7782589E4570"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.13 </span> Command-Line Options to Generate Password Protected Collection zip Files",
                                    "href":"generate-password-protected-collection-zip-files.html#GUID-975506B0-15B0-4796-986D-AA6E62171A15"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.14 </span> Caching Discovery Data",
                                    "href":"caching-discovery-information.html#GUID-9B8DB754-9E5F-45F7-8345-BA457CC96832"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.15 </span> Applying Patch Between Releases",
                                    "href":"applying-patch-between-releases.html#GUID-C7AAAB0C-A083-417E-9EA7-A26F867AD365"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.16 </span> Troubleshooting Oracle ORAchk and Oracle EXAchk",
                                    "href":"troubleshooting-oracle-orachk-and-oracle-exachk.html#GUID-DCFE045C-5327-4C20-BC8D-AFB22098CB44"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3 </span> Proactively Detecting and Diagnosing Performance Issues for Oracle RAC",
                            "href":"purpose-cluster-health-advisor.html#GUID-78F409B6-7CB2-4103-9460-4E87F48DCEC2",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.1 </span> Oracle Cluster Health Advisor Architecture",
                                    "href":"cluster-health-advisor-architecture.html#GUID-B5A8B420-3B20-48C5-B28F-2036AD22B132"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.2 </span> Monitoring the Oracle Real Application Clusters (Oracle RAC) Environment with Oracle Cluster Health Advisor",
                                    "href":"monitoring-rac-cha.html#GUID-1B030BFC-1AE9-40CB-8044-463435D640B7"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.3 </span> Using Cluster Health Advisor for Health Diagnosis",
                                    "href":"using-cha-health-diagnosis.html#GUID-284BA0EA-97F0-4D00-BB22-0AC25A2B973A"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.4 </span> Calibrating an Oracle Cluster Health Advisor Model for a Cluster Deployment",
                                    "href":"calibrating-cha-model-cluster-deployment.html#GUID-749C0751-6D4F-4B17-BCE4-13F24DB50667"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.5 </span> Viewing the Details for an Oracle Cluster Health Advisor Model",
                                    "href":"viewing-cha-model-details.html#GUID-B66226D3-FE46-4639-990A-4E069867231A"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.6 </span> Managing the Oracle Cluster Health Advisor Repository",
                                    "href":"managing-cha-repository.html#GUID-5AC80CAD-A08F-446F-AD80-B0963ED2BF7C"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.7 </span> Viewing the Status of Cluster Health Advisor",
                                    "href":"using-srvctl.html#GUID-BD790DCD-4FC5-41D6-9E83-0F6A5AD73179"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part II Automatically Monitoring the Cluster",
                    "href":"automatically-monitoring-cluster.html#GUID-1703071E-85AF-44B6-B9C9-AA72A38A5467",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">4 </span> Collecting Operating System Resources Metrics",
                            "href":"purpose-cluster-health-monitor.html#GUID-D30E017F-B2B9-461B-8035-5A04D64A617B",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.1 </span> Understanding Cluster Health Monitor Services",
                                    "href":"understanding-cluster-health-monitor-services.html#GUID-7279D351-6DBA-48F0-BB70-214F99885EB2"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.2 </span> Collecting Cluster Health Monitor Data",
                                    "href":"collecting-cluster-health-monitor-data.html#GUID-75A96A06-01B9-4D78-AAC6-639A2E709A8E"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.3 </span> Operating System Metrics Collected by Cluster Health Monitor",
                                    "href":"os-metrics-collected-by-chm.html#GUID-79836BB1-BBB5-43E2-BE00-D290D3DB85A2"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4 </span> Using Cluster Health Monitor from Enterprise Manager Cloud Control",
                                    "href":"chm-emcc-integration.html#GUID-DE503DBC-EFF7-4C48-A82A-0B891AE22D93"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">5 </span> Monitoring System Metrics for Cluster Nodes",
                            "href":"monitoring-oracle-clusterware.html#GUID-E3771F4E-6F18-4641-9468-17BA38082F31",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">5.1 </span> Monitoring Oracle Clusterware with Oracle Enterprise Manager",
                                    "href":"monitoring-clusterware-enterprise-manager.html#GUID-90D030B5-0D5A-4255-8E8A-4409B898B8FD"
                                },
                                {
                                    "title":"<span class=\"secnum\">5.2 </span> Monitoring Oracle Clusterware with Cluster Health Monitor",
                                    "href":"monitoring-clusterware-chm.html#GUID-CE85B3FE-E3B8-46BF-8C17-4834D7FD0633"
                                },
                                {
                                    "title":"<span class=\"secnum\">5.3 </span> Using the Cluster Resource Activity Log to Monitor Cluster Resource Failures",
                                    "href":"using-cluster-resource-activity-log.html#GUID-23BEE10D-F2CE-4785-83EE-21A7A7605A47"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part III Monitoring and Managing Database Workload Performance",
                    "href":"oracle-database-qos-management.html#GUID-B1DF82C1-9B62-42A8-96F1-A5AC8C7DC44D",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">6 </span> Introduction to Oracle Database QoS Management",
                            "href":"introduction-oracle-database-qos-management.html#GUID-8CB70EEB-3E9E-4417-ACA3-90A99CC83962",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">6.1 </span> What Is Oracle Database QoS Management?",
                                    "href":"what-is-oracle-qos-management.html#GUID-29C344C6-4EC3-4029-AD4E-0E0932157CD2"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.2 </span> Benefits of Using Oracle Database QoS Management",
                                    "href":"benefits-using-qos-management.html#GUID-5B722094-5735-4AAD-BD66-FEB1D151A45E"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.3 </span> Overview of Oracle Database QoS Management",
                                    "href":"overview-oracle-database-qos-management.html#GUID-C3692906-7594-42DB-96D7-DF9F50EA2FE2"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.4 </span> What Does Oracle Database QoS Management Manage?",
                                    "href":"what-does-qos-management-manage.html#GUID-DDB0BC29-122C-4967-AA34-21C5EFA790F3"
                                },
                                {
                                    "title":"<span class=\"secnum\">6.5 </span> Overview of Metrics",
                                    "href":"overview-metrics.html#GUID-D5BED854-32B1-4645-BF96-8B00BAF21009"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">7 </span> Supported Workloads and Strategies",
                            "href":"supported-workloads-and-strategies.html#GUID-36349ABA-02F7-4AA4-BB4A-BA46B6278AF8",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">7.1 </span> Supported Configurations for Oracle Database QoS Management",
                                    "href":"supported-configurations-qos-management.html#GUID-0D0F1748-5557-4AA3-8665-C5B60609D7D5"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.2 </span> Strategies for Creating Classifiers for Performance Classes",
                                    "href":"strategies-creating-classifiers-performance-classes.html#GUID-C63F73B4-C1ED-4188-B654-2B22E10BEEFB"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.3 </span> Configuration Strategies for Effective Resource Management",
                                    "href":"configuration-strategies-resource-management.html#GUID-46BB6BA2-D8DD-46C9-825E-2BC3913BBE8B"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.4 </span> Sample Implementation of Oracle Database QoS Management",
                                    "href":"sample-implementation-qos-management.html#GUID-D9C036D8-6DC9-4A8C-BB5C-361F63B97627"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.5 </span> Creating Oracle Database QoS Management Performance Policies for the Demo System",
                                    "href":"create-qos-management-perf-policies-demo-system.html#GUID-8EE0D029-2189-434E-867A-5316A4E0E871"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.6 </span> Managing Service Levels with Oracle Database QoS Management",
                                    "href":"managing-service-levels-qos-management.html#GUID-B676786D-8669-4CEA-986B-6AC8EEAE8AB9"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">8 </span> Installing and Enabling Oracle Database QoS Management",
                            "href":"installing-and-enabling-oracle-database-qos-management.html#GUID-4FC52AFD-2EDE-48F6-90E3-7DD0CFDA3624",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">8.1 </span> Configuring Oracle Database QoS Management to Manage Oracle Database Workloads",
                                    "href":"configuring-qos-management-manage-db-workloads.html#GUID-DEFDB919-ED61-481D-9506-054A360AC44A"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">9 </span> Administering the Oracle Database QoS Management System",
                            "href":"administering-oracle-database-qos-management-system.html#GUID-599F53A0-69D7-4F38-8323-82054359BEAE",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">9.1 </span> Determining If Oracle Database QoS Management is Enabled",
                                    "href":"determining-if-qos-is-enabled.html#GUID-DB443BE3-D21C-4909-A168-3285D145C052"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.2 </span> Monitoring Performance with Oracle Database QoS Management",
                                    "href":"monitoring-performance-qos-management.html#GUID-2E0C3398-1733-4C0E-9C7B-8BF8C15EB6E2"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.3 </span> Using the Oracle Database QoS Management Dashboard",
                                    "href":"using-qos-management-dashboard.html#GUID-45691387-364A-41F4-9FDD-463FB50158B7"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.4 </span> Administering the Policy Set",
                                    "href":"administering-policy-set.html#GUID-B461C1AD-F467-4F5E-BE7E-AE7C8D8E87C3"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.5 </span> Managing Performance Classes",
                                    "href":"managing-performance-classes.html#GUID-29ADED46-F0D4-45A0-906D-85621AE36602"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.6 </span> Managing Performance Policies",
                                    "href":"managing-performance-policies.html#GUID-1AACB6CE-F264-43BB-935C-E0AC9D9F697B"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.7 </span> Reviewing Performance Metrics",
                                    "href":"reviewing-performance-metrics.html#GUID-0BDF2F2D-56FE-45B4-AADC-130A497C9599"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.8 </span> Creating Administrative Users for Oracle Database QoS Management",
                                    "href":"creating-administrative-users-qos-management.html#GUID-56052150-E043-456E-A130-D903171C3C85"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.9 </span> Editing the Resource Plan for Oracle Database QoS Management",
                                    "href":"editing-resource-plan-qos-management.html#GUID-23A59957-1200-4964-9495-E7280EC50DDB"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">10 </span> Troubleshooting Oracle Database QoS Management",
                            "href":"troubleshooting-oracle-database-qos-management.html#GUID-2C71CF5C-28EF-48A8-A49F-4A91B8267ADD",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">10.1 </span> Common Problems",
                                    "href":"common-problems.html#GUID-42366E95-0C41-49A9-B86B-750D3BA494D6"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.2 </span> Locating Log or Trace Files",
                                    "href":"locating-log-or-trace-files.html#GUID-98C549D4-7D08-4354-9CF0-F9A0A372F173"
                                },
                                {
                                    "title":"<span class=\"secnum\">10.3 </span> Enabling Tracing",
                                    "href":"enabling-tracing.html#GUID-85CE721B-740F-4DD8-AE87-19C53C5D8B4B"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part IV Automatic Problem Solving",
                    "href":"automatic-problem-solving.html#GUID-E1A4447E-0A02-40E7-A46A-ED327E45B504",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">11 </span> Resolving Memory Stress",
                            "href":"purpose-memory-guard.html#GUID-5EBC917F-2810-469D-9DAE-EA6EB2F123D8",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">11.1 </span> Overview of Memory Guard",
                                    "href":"memory-guard-overview.html#GUID-7689AE74-8A1E-4C8A-A51F-914924F0BC68"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2 </span> Memory Guard Architecture",
                                    "href":"memory-guard-architecture.html#GUID-32CEC3E8-755D-4A43-85FE-C9B35120FEC1"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.3 </span> Enabling Memory Guard in Oracle Real Application Clusters (Oracle RAC) Environment",
                                    "href":"enabling-memory-guard-oracle-rac-environment.html#GUID-880E1DF8-8514-41AD-9AE7-0B84B8D5EFB1"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.4 </span> Use of Memory Guard in Oracle Real Application Clusters (Oracle RAC) Deployment",
                                    "href":"use-memory-guard-oracle-rac-deployment.html#GUID-D52B64E6-38B4-435D-A44C-3E04F543A097"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">12 </span> Resolving Database and Database Instance Hangs",
                            "href":"purpose-hang-manager.html#GUID-1A6AFDF9-9F4D-40B9-B2CB-97286AEFFFFB",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">12.1 </span> Hang Manager Architecture",
                                    "href":"hang-manager-arch.html#GUID-5A59C41D-39E3-456F-9B67-07061692C4A6"
                                },
                                {
                                    "title":"<span class=\"secnum\">12.2 </span> Optional Configuration for Hang Manager",
                                    "href":"enabling-hang-manager-oracle-rac-environment.html#GUID-C1E88CA1-9398-4114-A875-D43615F8F140"
                                },
                                {
                                    "title":"<span class=\"secnum\">12.3 </span> Hang Manager Diagnostics and Logging",
                                    "href":"hang-manager-diagnostics-and-logging.html#GUID-419C30AF-1BFB-4DEA-A6CA-CDBB99B24F2C"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Part V Collecting Diagnostic Data and Triaging, Diagnosing, and Resolving Issues",
                    "href":"diagnose-troubleshoot-issues-errors.html#GUID-DA02663E-305E-4DD2-9758-DCA883B54198",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">13 </span> Getting Started with Oracle Trace File Analyzer",
                            "href":"quick-start-guide.html#GUID-A1DBE3D4-6501-47D3-854E-E9978F19F7BA"
                        },
                        {
                            "title":"<span class=\"secnum\">14 </span> Automatic Diagnostic Collections",
                            "href":"automatic-diagnostic-collection.html#GUID-45A5F39E-B1A6-4F89-947D-EA9E8FBA7ED5"
                        },
                        {
                            "title":"<span class=\"secnum\">15 </span> On-demand Analysis and Diagnostic Collection",
                            "href":"ondemand-diagnostic-collection.html#GUID-89D19AFB-0230-49AD-8C90-7B4E77A36174",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">15.8 </span> Changing Oracle Grid Infrastructure Trace Levels",
                                    "href":"changing-clusterware-trace-levels.html#GUID-940A4DD7-80E8-4DAA-9BAD-571D13428DFC"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">16 </span> REST Service",
                            "href":"rest-service.html#GUID-F4968CF4-AAD9-4D39-9D6E-C20EEC1AC80E"
                        },
                        {
                            "title":"<span class=\"secnum\">17 </span> Maintaining Oracle Trace File Analyzer to the Latest Version",
                            "href":"maintaining-tfa-latest-version.html#GUID-5F95AADF-4A65-428C-A9D9-B3015CDD6EE7"
                        },
                        {
                            "title":"<span class=\"secnum\">18 </span> Performing Custom Collections",
                            "href":"performing-custom-collections.html#GUID-E4A2492E-A123-480A-B954-57898DBCE8BE"
                        },
                        {
                            "title":"<span class=\"secnum\">19 </span> Managing and Configuring Oracle Trace File Analyzer",
                            "href":"managing-and-configuring-tfa.html#GUID-CBF85753-9DCC-48BC-AA83-5CA2982ED0EB"
                        },
                        {
                            "title":"<span class=\"secnum\">20 </span> Managing Oracle Database and Oracle Grid Infrastructure Diagnostic Data",
                            "href":"managing-db-and-gi-diagnostic-data.html#GUID-996745FA-5ADE-4CCF-B703-88B1C88B1A8B"
                        },
                        {
                            "title":"<span class=\"secnum\">21 </span> Troubleshooting Oracle Trace File Analyzer",
                            "href":"troubleshoot-tfa.html#GUID-169D2468-008B-4CE1-AB8E-1BA2A6233360"
                        }
                    ]
                },
                {
                    "title":"Appendixes",
                    "href":"appendixes.html#GUID-D77D07F2-AB41-49FA-AD54-D3C1354A0BA0",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">A </span> Oracle ORAchk and Oracle EXAchk Command-Line Options",
                            "href":"orachk-and-exachk-command-line-options.html#GUID-87407F79-597D-453E-82DF-D870386829A9",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">A.1 </span> Running Generic Oracle ORAchk and Oracle EXAchk Commands",
                                    "href":"generic-orachk-and-exachk-commands.html#GUID-277CE34A-C002-4240-AB23-62F46AE3AA4E"
                                },
                                {
                                    "title":"<span class=\"secnum\">A.2 </span> Controlling the Scope of Checks",
                                    "href":"controlling-scope-checks.html#GUID-72F5AC8F-48D3-4553-BF89-F5AF5D794B92"
                                },
                                {
                                    "title":"<span class=\"secnum\">A.3 </span> Managing the Report Output",
                                    "href":"managing-report-output.html#GUID-E136A666-1F99-4618-B758-9B245043B997"
                                },
                                {
                                    "title":"<span class=\"secnum\">A.4 </span> Uploading Results to Database",
                                    "href":"uploading-results-database.html#GUID-1A0ADE10-0966-4184-AB4F-0022B661C2CD"
                                },
                                {
                                    "title":"<span class=\"secnum\">A.5 </span> Configuring the Daemon Mode",
                                    "href":"configuring-daemon-mode.html#GUID-850DFA32-8838-4E47-83D1-B2B7EC08E720"
                                },
                                {
                                    "title":"<span class=\"secnum\">A.6 </span> Controlling the Behavior of the Daemon",
                                    "href":"controlling-behavior-daemon.html#GUID-5B58CE4E-61AF-490A-AB46-BE610C637229"
                                },
                                {
                                    "title":"<span class=\"secnum\">A.7 </span> Tracking File Attribute Changes",
                                    "href":"tracking-file-attribute-changes.html#GUID-31EEEB6D-A0E3-4A44-BF59-90A73D43B0F6"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">B </span> OCLUMON Command Reference",
                            "href":"oclumon-command-reference.html#GUID-1A00F7D4-4843-4647-AFF8-07021719404F",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">B.1 </span> oclumon debug",
                                    "href":"oclumon-debug.html#GUID-BE7FB2FF-154D-44F9-8A9C-8F624C2F9C5C"
                                },
                                {
                                    "title":"<span class=\"secnum\">B.2 </span> oclumon dumpnodeview",
                                    "href":"oclumon-dumpnodeview.html#GUID-E6489AC0-34B3-4B20-8586-CC3B2752413C"
                                },
                                {
                                    "title":"<span class=\"secnum\">B.3 </span> oclumon dumpnodeview local",
                                    "href":"oclumon-dumpnodeview-local.html#GUID-F3007C3C-05E6-4ECC-8685-51F309E2BD04"
                                },
                                {
                                    "title":"<span class=\"secnum\">B.4 </span> oclumon manage",
                                    "href":"oclumon-manage.html#GUID-CF970862-EAD8-41F5-8CE7-3C50720CEE70"
                                },
                                {
                                    "title":"<span class=\"secnum\">B.5 </span> oclumon version",
                                    "href":"oclumon-version.html#GUID-01930638-A9A3-4335-921C-8AFEE0778854"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">C </span> Managing the Cluster Resource Activity Log",
                            "href":"cluster-resource-activity-log.html#GUID-7650ADB9-3CB1-4516-8470-4501EBB42B01",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">C.1 </span> crsctl query calog",
                                    "href":"crsctl-query-calog.html#GUID-257FAEAB-3AD6-4255-98CA-6416787E948F"
                                },
                                {
                                    "title":"<span class=\"secnum\">C.2 </span> crsctl get calog maxsize",
                                    "href":"crsctl-get-calog-maxsize.html#GUID-C9ED565B-6A2F-45FE-9E99-DF3761080634"
                                },
                                {
                                    "title":"<span class=\"secnum\">C.3 </span> crsctl get calog retentiontime",
                                    "href":"crsctl-get-calog-retentiontime.html#GUID-26CC9484-F06F-41DD-8796-19BD450171D7"
                                },
                                {
                                    "title":"<span class=\"secnum\">C.4 </span> crsctl set calog maxsize",
                                    "href":"crsctl-set-calog-maxsize.html#GUID-1C1DBC6D-422C-4025-907A-1247D7940C1E"
                                },
                                {
                                    "title":"<span class=\"secnum\">C.5 </span> crsctl set calog retentiontime",
                                    "href":"crsctl-set-calog-retentiontime.html#GUID-E0CD0CF0-FCB0-479A-860D-67346238D06B"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">D </span> chactl Command Reference",
                            "href":"chactl-command-reference.html#GUID-9AD6BC7D-F0F5-41E9-80CB-9BD911FCE586",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">D.1 </span> chactl monitor",
                                    "href":"chactl-monitor.html#GUID-D57DCEF9-83B9-43E5-BA85-52C96BD58CC4"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.2 </span> chactl unmonitor",
                                    "href":"chactl-unmonitor.html#GUID-598C1256-8931-44F5-9015-03150546DE41"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.3 </span> chactl status",
                                    "href":"chactl-status.html#GUID-A76C4E89-7C2E-46B5-A3DD-A7F6E76DF166"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.4 </span> chactl config",
                                    "href":"chactl-config.html#GUID-942D5587-41BA-4599-A79E-E2C69A24647F"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.5 </span> chactl calibrate",
                                    "href":"chactl-calibrate.html#GUID-868D37F5-F439-4E10-AFE3-3BED56FFC125"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.6 </span> chactl query diagnosis",
                                    "href":"chactl-query-diagnosis.html#GUID-07F4C0DB-541B-4509-B851-64E497B0D876"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.7 </span> chactl query model",
                                    "href":"chactl-query-model.html#GUID-F434A716-1875-464D-BCDE-E77969641F5C"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.8 </span> chactl query repository",
                                    "href":"chactl-query-repository.html#GUID-41B609B2-4F3F-41D6-B16B-25D84E4AF67C"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.9 </span> chactl query calibration",
                                    "href":"chactl-query-calibration.html#GUID-7B21CB95-983B-4F64-AF4E-F1F82CC38412"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.10 </span> chactl remove model",
                                    "href":"chactl-remove.html#GUID-955C1E6B-6304-45E9-866D-7B42A7E008BC"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.11 </span> chactl rename model",
                                    "href":"chactl-rename.html#GUID-FBFD995E-AC1C-4115-9D89-C570C596E9CE"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.12 </span> chactl export model",
                                    "href":"chactl-export-model.html#GUID-0E517EFB-C268-481C-A676-659F0B7A2EE4"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.13 </span> chactl import model",
                                    "href":"chactl-import-model.html#GUID-C6A52CAF-18CC-42D8-84BB-9C08949EFA63"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.14 </span> chactl set maxretention",
                                    "href":"chactl-set-maxretention.html#GUID-1A72946C-B85A-436A-A0BD-579938832505"
                                },
                                {
                                    "title":"<span class=\"secnum\">D.15 </span> chactl resize repository",
                                    "href":"chactl-resize-repository.html#GUID-741EDDFA-8258-4379-82D0-DB471009B0D5"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">E </span> Oracle Trace File Analyzer Installer, Command-Line and Shell Options",
                            "href":"tfa-command-reference.html#GUID-C8230C20-6A23-4F41-9966-19CB6035AB6F",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">E.1 </span> Installing Oracle Trace File Analyzer",
                                    "href":"install-tfa-platform.html#GUID-F57C15E1-B82A-42A1-B064-B6C86639799F"
                                },
                                {
                                    "title":"<span class=\"secnum\">E.2 </span> Running Administration Commands",
                                    "href":"running-administration-commands.html#GUID-2178AB8E-FEAE-43EA-9878-FD646DD67484"
                                },
                                {
                                    "title":"<span class=\"secnum\">E.3 </span> Running Summary and Analysis Commands",
                                    "href":"running-summary-and-analysis-commands.html#GUID-D5E07BEB-14BF-45A1-B8FC-C03F187520F9"
                                },
                                {
                                    "title":"<span class=\"secnum\">E.4 </span> Running Diagnostic Collection Commands",
                                    "href":"running-diagnostic-collection-commands.html#GUID-61835B71-6E93-412C-8943-94E65B92A2D2"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Glossary",
                    "href":"glossary.html#GUID-B33368A7-1EAF-453C-A7BC-C9BC58A1716D"
                },
                {
                    "title":"Index",
                    "href":"book-index.html"
                }
            ]
        }
    ]
});