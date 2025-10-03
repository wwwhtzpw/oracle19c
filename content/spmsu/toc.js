define(
{
    "reducedVersion":true,
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-335493DF-6BD4-4FB4-97DD-558004DB3861"
                },
                {
                    "title":"<span class=\"secnum\">1 </span> Migrating and Upgrading Oracle Database",
                    "href":"migrating-and-upgrading-oracle-database.html#GUID-5A0B02DD-B6FE-488A-8960-3070F6E6559A",
                    "topics":[
                        {
                            "title":"Overview of Active Database Duplication",
                            "href":"overview-of-active-database-duplication.html#GUID-2D2ED1CD-2582-4B4E-8363-681C59DB331F"
                        },
                        {
                            "title":"Active Database Duplication Using Backup Sets",
                            "href":"active-database-duplication-using-backup-sets.html#GUID-BCCCB6D0-B837-4013-A417-8BFB5DB5CD7D"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">2 </span> Preparing Servers and Network for Database Duplication",
                    "href":"preparing-servers-and-network-for-db-duplication.html#GUID-D1799598-FC31-4140-BC3B-127B5A9C8B96",
                    "topics":[
                        {
                            "title":"Prerequisites Specific to Active Database Duplication",
                            "href":"prerequisites-specific-to-active-database-duplication.html#GUID-350AFCDD-E81A-463F-B307-66DDACF65D66"
                        },
                        {
                            "title":"Checklist for Preparing Active Database Duplication",
                            "href":"checklist-for-preparing-active-db-duplication.html#GUID-22985B97-BCC1-427C-A9EF-94E1453BFF78"
                        },
                        {
                            "title":"Configuring RMAN Channels for Use in Oracle Database Duplication",
                            "href":"configuring-rman-channels-for-use-in-duplication.html#GUID-01C2E547-029B-4237-9F8E-9E7ADC7D990E"
                        },
                        {
                            "title":"Configuring Automatic Channels Across File Systems",
                            "href":"configuring-automatic-channels-across-file-systems.html#GUID-7EBD3609-5F30-495B-A847-B95B17C774B9"
                        },
                        {
                            "title":"Configuring Channels for Active Database Duplication",
                            "href":"configuring-channels-for-activedb-duplication.html#GUID-922BBA95-FCCD-4BEB-A69D-96C662F468E6"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">3 </span> Preparing the Primary Instance on the Source Host",
                    "href":"preparing-the-primary-instance-source-host.html#GUID-DC66D422-829E-4704-9A14-790154EED6CD",
                    "topics":[
                        {
                            "title":"Configuring SQL*Net to Prepare the Primary Instance on the Source Host",
                            "href":"configuring-sql-net-to-prepare-the-primary-instance.html#GUID-EE464279-7BCD-465A-A255-57AE3851CDDB"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">4 </span> Preparing the Auxiliary Instance on the Destination Host",
                    "href":"preparing-the-auxiliary-instance-destination-host.html#GUID-A0225B5E-46F5-456A-9CAF-9440761D31B2",
                    "topics":[
                        {
                            "title":"Installing the Oracle Database Software on the Destination Host",
                            "href":"installing-the-oracle-db-software-on-the-destination-host.html#GUID-CB32BB0E-5E76-4D18-8D93-0227344A8652"
                        },
                        {
                            "title":"Steps to Create an Initialization Parameter File for the Auxiliary Instance",
                            "href":"steps-to-create-an-init-param-file-for-the-aux-instance.html#GUID-13FE86AF-5D6B-4573-B0DF-D98CF57DB451"
                        },
                        {
                            "title":"Copying the Server Parameter File from the Source Database",
                            "href":"copying-the-server-param-file-from-the-source-db.html#GUID-E7FCF631-6272-41FE-93A2-CFD7C1E0A2FE"
                        },
                        {
                            "title":"Creating a Password File for the Auxiliary Instance",
                            "href":"creating-a-password-file-for-the-auxiliary-instance.html#GUID-A338B143-E321-4329-A2ED-2467C70C03DC"
                        },
                        {
                            "title":"Creating Directories for the Duplicate Database",
                            "href":"creating-directories-for-the-duplicate-db.html#GUID-54B484F1-5E9E-4618-BFD7-84010BE7CFF0"
                        },
                        {
                            "title":"Using the Same Names for Database Files in the Source Database and Duplicate Database",
                            "href":"using-the-same-names-for-database-files.html#GUID-7D61A2DD-76EB-4DCE-A66B-C702A210A4AA"
                        },
                        {
                            "title":"Establishing Oracle Net Connectivity Between the Source Database and Auxiliary Instance",
                            "href":"establish-oracle-net-connectivity.html#GUID-460171C8-2E09-4D0E-9AC3-A4C28392A220"
                        },
                        {
                            "title":"Configuring the Network Between Source and Target Oracle Databases",
                            "href":"configuring-the-network-between-source-and-target-dbs.html#GUID-7486D8DB-2476-4251-AAE1-77A48EFF59CF",
                            "topics":[
                                {
                                    "title":"Adding Static Service to Listener",
                                    "href":"adding-static-service-to-listener.html#GUID-D431F758-F7CC-43F8-A8D2-82941DB0E578"
                                },
                                {
                                    "title":"Configuring SQL*Net to Prepare the Auxiliary Instance on the Destination Host",
                                    "href":"configuring-sql-net-to-prepare-the-auxiliary-instance.html#GUID-78F3585C-250A-476E-91CC-EE573A840E32"
                                },
                                {
                                    "title":"Checking SQL*Net Configuration",
                                    "href":"checking-sql-net-configuration.html#GUID-3982B831-7951-41D8-8577-A74F05F5623D"
                                }
                            ]
                        },
                        {
                            "title":"Starting the Auxiliary Instance",
                            "href":"starting-the-auxiliary-instance.html#GUID-7534941B-A211-4EA5-87AC-D657AE51839E"
                        },
                        {
                            "title":"Making the Oracle Keystore Available to the Destination Host",
                            "href":"making-the-oracle-Keystore-available-to-the-dest-host.html#GUID-E016C2DC-1774-4057-8EAF-3F69E9A6322A"
                        },
                        {
                            "title":"Starting RMAN and Connecting to Databases",
                            "href":"starting-rman-and-connecting-to-dbs.html#GUID-CF2871A5-C9F7-4EAF-A583-8A8966264B05"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">5 </span> Duplicating the Primary Oracle Database",
                    "href":"duplicating-the-oracle-database.html#GUID-412B7170-1D86-4E1B-A1D8-A9ECF60D3DF3",
                    "topics":[
                        {
                            "title":"Verifying the Environment",
                            "href":"verifying-the-environment.html#GUID-16D4494E-A493-4272-AC29-E3FD8A98ACB2"
                        },
                        {
                            "title":"Running the RMAN DUPLICATE Command",
                            "href":"running-the-rman-duplicate-command.html#GUID-108FF9BF-AF8C-42BB-B097-61661D6A5213"
                        },
                        {
                            "title":"Postmigration Verification of the Duplicate Database",
                            "href":"postmigration-verification.html#GUID-5F6BBAA1-7A05-4687-99DD-C733903EFAB4"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">6 </span> Refresh and Switchover to the Physical Standby Oracle Database",
                    "href":"refresh-and-switchover-to-the-phyical-standby-db.html#GUID-C829C3F8-3546-4E13-BC4B-B11CED04F3E4",
                    "topics":[
                        {
                            "title":"Steps to Refresh a Physical Standby Database with Changes Made to the Primary Database",
                            "href":"refresh-a-physical-standby-db.html#GUID-828A4953-3F7E-4975-ADA4-5469D6794BB0"
                        },
                        {
                            "title":"Performing a Switchover to a Physical Standby Database",
                            "href":"switchover-to-a-physical-db.html#GUID-AAD70601-D248-4309-B8DD-F461EE31A5FF"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">7 </span> Checking Compatibility Before Upgrading Oracle Database",
                    "href":"getting-started.html#GUID-72568D9E-55E6-4003-A239-405A816D1E23",
                    "topics":[
                        {
                            "title":"Checking the Compatibility Level of Oracle Database",
                            "href":"checking-the-compatibility-level-of-oracle-database.html#GUID-5715C0EC-0229-4AE0-8433-DFE4A4297C4A"
                        },
                        {
                            "title":"Values for the COMPATIBLE Initialization Parameter in Oracle Database",
                            "href":"values-for-the-compatible-initialization-parameter.html#GUID-1146B7A7-81EE-4F90-8A0A-8440A6618CD9"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">8 </span> Preparing to Upgrade Oracle Database",
                    "href":"preparing-to-upgrade.html#GUID-E1C7B8AF-FF00-4E91-86FE-D02395B430D8",
                    "topics":[
                        {
                            "title":"Installing Oracle Software in a New Oracle Home",
                            "href":"installing-oracle-software-in-a-new-oracle-home.html#GUID-184AEF67-4227-4CC1-93C4-BDF24F6C46D9",
                            "topics":[
                                {
                                    "title":"Choose a New Location for Oracle Home when Upgrading",
                                    "href":"choose-a-new-location-for-oracle-home-when-upgrading.html#GUID-AFA0564D-F5B5-40CA-988C-011AFCE2084B"
                                },
                                {
                                    "title":"Installing the New Oracle Database Software for Single Instance",
                                    "href":"installing-the-new-db-software-for-single-instance.html#GUID-9FFE2643-6529-4AB2-A92F-082361739A81"
                                }
                            ]
                        },
                        {
                            "title":"The Graphical User Interface Method for Upgrading Oracle Database",
                            "href":"the-gui-method-for-upgrading-db.html#GUID-814C68FB-7802-4B25-957E-6253757ACC7C"
                        },
                        {
                            "title":"The Manual, Command-Line Method for Upgrading Oracle Database",
                            "href":"the-manual-method-for-upgrading-db.html#GUID-3FBD30C3-4BEC-48D6-895A-B7C12C4119AE"
                        },
                        {
                            "title":"Prepare a Backup Strategy Before Upgrading Oracle Database",
                            "href":"prepare-a-backup-strategy-before-upgrading-db.html#GUID-671004F2-89AC-464D-A1E2-B4ED418D23C0"
                        },
                        {
                            "title":"Database Preparation Tasks to Complete Before Starting Oracle Database Upgrades",
                            "href":"db-preparation-tasks-before-starting-db-upgrades.html#GUID-58C1A4B9-32F4-44E5-B82B-5D0EC78A6AE2",
                            "topics":[
                                {
                                    "title":"Patch Set Updates and Requirements for Upgrading Oracle Database",
                                    "href":"patch-set-updates-and-requirements.html#GUID-46F09541-C36A-4790-B3D3-E0E336A7BBC3"
                                },
                                {
                                    "title":"Copying Transparent Encryption Oracle Wallets",
                                    "href":"copying-transparent-encryption-oracle-wallets.html#GUID-6C0D6F38-2ADE-4E60-8603-A7DB1F218B8B"
                                },
                                {
                                    "title":"Recommendations for Oracle Net Services When Upgrading Oracle Database",
                                    "href":"recommendations-for-oracle-net-services.html#GUID-6732E4F8-93B5-4257-A8FC-5257F28E44E3"
                                },
                                {
                                    "title":"Understanding Password Case Sensitivity and Upgrades",
                                    "href":"understanding-password-case-sensitivity-and-upgrades.html#GUID-6428A98A-6621-4E49-89E5-FAFD51F04B60"
                                },
                                {
                                    "title":"Checking for Accounts Using Case-Insensitive Password Version",
                                    "href":"checking-for-accounts-using-case-insensitive-password.html#GUID-ABD2D296-EFB9-49CA-94C5-FB1068AF19DE"
                                },
                                {
                                    "title":"Running Upgrades with Read-Only Tablespaces",
                                    "href":"running-upgrades-with-read-only-tablespaces.html#GUID-E10096D0-36E3-41AF-9381-D74089FC6E17"
                                }
                            ]
                        },
                        {
                            "title":"Using the Pre-Upgrade Information Tool for Oracle Database",
                            "href":"using-the-pre-upgrade-information-tool-for-oracle-db.html#GUID-C0219AF1-AD43-4097-B358-E53E48958647",
                            "topics":[
                                {
                                    "title":"Setting Up Environment Variables for the Pre-Upgrade Information Tool",
                                    "href":"setting-up-environment-variables.html#GUID-DE7C0E83-85C6-4DA0-BF25-110B3FE5A77E"
                                },
                                {
                                    "title":"Running the Pre-Upgrade Information Tool",
                                    "href":"running-pre-upgrade-information-tool-for-non-cdb-checks.html#GUID-B04CDE73-45F1-4717-98BB-9FCC209DEC01"
                                },
                                {
                                    "title":"Pre-Upgrade Information Tool Warnings and Recommendations for Oracle Database",
                                    "href":"pre-upgrade-information-tool-warnings-and-recommendations.html#GUID-DC0F9DF2-4001-48E5-AC18-4F2FA10B869E",
                                    "topics":[
                                        {
                                            "title":"Updating Access Control Lists and Network Utility Packages",
                                            "href":"updating-acls-and-network-utility-packages.html#GUID-C2D486E3-BA9E-408B-8E0B-B3717932013F"
                                        },
                                        {
                                            "title":"Evaluate Dependencies and Add ACLs for Network Utility Packages",
                                            "href":"evaluate-dependencies-and-add-acls-for-net-util-packages.html#GUID-3A3CF5F6-C123-4AAE-AADA-B4280C6EC410"
                                        }
                                    ]
                                },
                                {
                                    "title":"Pre-Upgrade Information Tool Output Example",
                                    "href":"pre-upgrade-information-tool-output-example.html#GUID-0C496815-1826-4E28-8437-36FA549000F9"
                                }
                            ]
                        },
                        {
                            "title":"Enabling Oracle Database Vault After Upgrading Oracle Database",
                            "href":"enabling-oracle-db-vault-after-upgrading-oracle-db.html#GUID-12B920E9-B2DA-48A0-832C-3E07D172A011",
                            "topics":[
                                {
                                    "title":"Upgrading Oracle Database Without Disabling Oracle Database Vault",
                                    "href":"upgrading-oracle-db-without-disabling-oracle-db-vault.html#GUID-216BAD89-4ED9-43CB-B7A5-F710499673BE"
                                },
                                {
                                    "title":"Common Upgrade Scenarios with Oracle Database Vault",
                                    "href":"common-upgrade-scenarios-with-oracle-db-vault.html#GUID-68B42C38-0B29-49B0-8B9F-8885C450F6DF"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">9 </span> Upgrading Oracle Database",
                    "href":"upgrading-db.html#GUID-A5C44D47-D082-4284-A370-C3DA100BEADB",
                    "topics":[
                        {
                            "title":"Using DBUA to Upgrade the Database on Linux, Unix, and Windows Systems",
                            "href":"using-dbua-to-upgrade-the-database.html#GUID-307DACD9-ECEE-4079-B767-B22620B99900"
                        },
                        {
                            "title":"Manually Upgrading Non-CDB Architecture Oracle Databases",
                            "href":"manually-upgrading-non-cdb.html#GUID-D6F6D375-B021-47E0-B0C8-B2C0B191AC0D"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">10 </span> Post-Upgrade Tasks for Oracle Database",
                    "href":"post-upgrde-tasks.html#GUID-3F3A89AC-8093-4E17-8EDA-0305720E6D67",
                    "topics":[
                        {
                            "title":"Check the Upgrade With Post-Upgrade Status Tool",
                            "href":"check-the-upgrade-with-post-upgrade-status-tool.html#GUID-ADD5F3FB-5B7B-42F2-AB1B-FE0B9DE0CF41"
                        },
                        {
                            "title":"How to Show the Current State of the Oracle Data Dictionary",
                            "href":"how-to-show-the-current-state-of-the-data-dictionary.html#GUID-57458D9B-9927-4E1A-8F6C-5B2A301B30C4"
                        },
                        {
                            "title":"Required Tasks to Complete After Upgrading Oracle Database",
                            "href":"required-tasks-to-complete-after-upgrade.html#GUID-C9102D8A-0BD1-41FF-9AE9-656818267FB9",
                            "topics":[
                                {
                                    "title":"Setting Environment Variables on Linux and Unix Systems After Manual Upgrades",
                                    "href":"setting-environment-variables-on-linux-and-unix-systems.html#GUID-C9AAA819-C4E2-4674-B8E3-530921AF49F7"
                                },
                                {
                                    "title":"Recompiling All Invalid Objects",
                                    "href":"recompiling-all-invalid-objects.html#GUID-1023C5FB-B409-4F16-BCA1-C14CB9B7E625"
                                },
                                {
                                    "title":"Track Invalid Object Recompilation Progress",
                                    "href":"track-invalid-object-recompilation-progress.html#GUID-FF36ABBF-7578-47DF-A4F2-6AC2FDA5CA33"
                                },
                                {
                                    "title":"Running OPatch Commands After Upgrading Oracle Database",
                                    "href":"running-opatch-commands-after-upgrading-oracle-database.html#GUID-21424A22-F527-4E2F-A072-FD600E5BD449"
                                },
                                {
                                    "title":"Setting oratab and Scripts to Point to the New Oracle Location After Upgrading Oracle Database",
                                    "href":"setting-oratab-and-scripts-to-point-to-new-oracle-location.html#GUID-04943AB1-2558-4058-81AA-26EB6C2E5C38"
                                },
                                {
                                    "title":"Check PL/SQL Packages and Dependent Procedures",
                                    "href":"check-pl-sql-packages-and-dependent-procedures.html#GUID-3F55A8C1-C867-4483-AB43-B2D12D9745BA"
                                },
                                {
                                    "title":"Upgrading Tables Dependent on Oracle-Maintained Types",
                                    "href":"upgrading-tables-dependent-on-oracle-maintained-types.html#GUID-B57B8AF5-C22C-4CE7-8D9D-AAA00B9FF3E3"
                                },
                                {
                                    "title":"Enabling the New Extended Data Type Capability",
                                    "href":"enabling-the-new-extended-data-type-capability.html#GUID-88FB7FFD-4392-49C6-843A-45B49F8A1821"
                                },
                                {
                                    "title":"Adjusting Minimum and Maximum for Parallel Execution Servers",
                                    "href":"adjusting-min-and-max-for-parallel-execution-servers.html#GUID-E3E9F44D-6769-4E30-A61F-12E91168640C"
                                },
                                {
                                    "title":"About Recovery Catalog Upgrade After Upgrading Oracle Database",
                                    "href":"about-recovery-catalog-upgrade-after-upgrading-oracle-db.html#GUID-56A8346B-EA67-46FB-AB4C-A7D0710C8CD8"
                                },
                                {
                                    "title":"Upgrading the Time Zone File Version After Upgrading Oracle Database",
                                    "href":"upgrading-time-zone-file-version-after-upgrading-oracle-db.html#GUID-41C8B1F3-1294-4F58-99F7-AB75F9889E05"
                                },
                                {
                                    "title":"Upgrading Statistics Tables Created by the DBMS_STATS Package After Upgrading Oracle Database",
                                    "href":"upgrading-statistics-tables-created-by-dbms-stats-package.html#GUID-B22CC865-E3FB-4D7E-821F-A60159E0F833"
                                },
                                {
                                    "title":"Upgrading Externally Authenticated SSL Users After Upgrading Oracle Database",
                                    "href":"upgrading-externally-authenticated-ssl-users.html#GUID-751FEECC-E0C8-4C86-AC1C-AFB64C81CF00"
                                },
                                {
                                    "title":"Configuring the FTP and HTTP Ports and HTTP Authentication for Oracle XML DB",
                                    "href":"configuring-ftp-and-http-ports-andhttp-authentication.html#GUID-ACCBC4FB-2626-40AD-91A4-3E38DA4FF339"
                                },
                                {
                                    "title":"Install Oracle Text Supplied Knowledge Bases After Upgrading Oracle Database",
                                    "href":"install-oracle-text-supplied-knowledge-bases.html#GUID-C4517406-1BB3-41AA-AD27-8E18AA2E98C5"
                                },
                                {
                                    "title":"Update Oracle Application Express Configuration After Upgrading Oracle Database",
                                    "href":"update-oracle-application-express-configuration.html#GUID-BF742F8E-61C6-4F7C-927D-26687D1A3B2F"
                                },
                                {
                                    "title":"Configure Access Control Lists (ACLs) to External Network Services",
                                    "href":"configure-acls-to-external-network-services.html#GUID-77701CFB-0716-40B4-B9BE-6E0A77506496"
                                },
                                {
                                    "title":"Check for the SQLNET.ALLOWED_LOGON_VERSION Parameter Behavior",
                                    "href":"check-for-sqlnet-allowed-logon-version-parameter-behavior.html#GUID-433E0DB9-026E-4322-A8FF-BA0E108AB28B"
                                }
                            ]
                        },
                        {
                            "title":"Recommended and Best Practices to Complete After Upgrading Oracle Database",
                            "href":"recommended-and-best-practices-complete-upgrading-oracle-database.html#GUID-5196CE88-8669-45D6-8906-C45272940740",
                            "topics":[
                                {
                                    "title":"Back Up the Database",
                                    "href":"back-up-the-db.html#GUID-AA7E76B0-1571-4F24-A65D-756602A814B9"
                                },
                                {
                                    "title":"Scenario Non-CDB Running the postupgrade_fixups.sql Script",
                                    "href":"scenario-non-cdb-running-the-postupgrade-fixups-script.html#GUID-D4021D3E-14A6-4F56-A104-6601151A083C"
                                },
                                {
                                    "title":"Gathering Dictionary Statistics After Upgrading",
                                    "href":"gathering-dictionary-statistics-after-upgrading.html#GUID-8AF2DB10-9746-4938-B69F-D1F3890BEAF5"
                                },
                                {
                                    "title":"Regathering Fixed Objects Statistics with DBMS_STATS",
                                    "href":"regathering-fixed-objects-statistics.html#GUID-44B9B605-8FFE-4FFD-89A0-105CE4C4939E"
                                },
                                {
                                    "title":"Reset Passwords to Enforce Case-Sensitivity",
                                    "href":"reset-passwords-to-enforce-case-sensitivity.html#GUID-082A0965-7898-4D84-885C-24BEE2493FC4",
                                    "topics":[
                                        {
                                            "title":"Finding and Resetting User Passwords That Use the 10G Password Version",
                                            "href":"finding-and-resetting-user-passwords-10g-password-version.html#GUID-D7B09DFE-F55D-449A-8F8A-174D89936304"
                                        }
                                    ]
                                },
                                {
                                    "title":"Add New Features as Appropriate",
                                    "href":"add-new-features-as-appropriate.html#GUID-128BB0D3-0739-4631-8283-F667302DCBF1"
                                },
                                {
                                    "title":"Develop New Administrative Procedures as Needed",
                                    "href":"develop-new-administrative-procedures-as-needed.html#GUID-36C4A570-B944-4E0E-B754-EBC04CC4F07C"
                                },
                                {
                                    "title":"Set Threshold Values for Tablespace Alerts",
                                    "href":"set-threshold-values-for-tablespace-alerts.html#GUID-0A27E3EA-B320-4DED-8587-9ED5E3DAAEC3"
                                },
                                {
                                    "title":"Migrating From Rollback Segments To Automatic Undo Mode",
                                    "href":"migrating-from-rollback-segments-to-automatic-undo-mode.html#GUID-7BBB2D85-E8FB-437B-BA21-6D08A04BB7AE"
                                },
                                {
                                    "title":"Configure Oracle Data Guard Broker",
                                    "href":"configure-oracle-data-guard-broker.html#GUID-1A40296E-1777-4272-A381-91B60A1E3B3E"
                                },
                                {
                                    "title":"Migrating Tables from the LONG Data Type to the LOB Data Type",
                                    "href":"migrating-tables-from-long-data-type-to-lob-data-type.html#GUID-07FE428B-C14E-4457-9A8E-04964D52B49E"
                                },
                                {
                                    "title":"Identify Oracle Text Indexes for Rebuilds",
                                    "href":"identify-oracle-text-indexes-for-rebuilds.html#GUID-7A5E0A01-7711-4EEA-88DD-EECF16B9A6F7"
                                },
                                {
                                    "title":"About Testing the Upgraded Production Oracle Database",
                                    "href":"about-testing-the-upgraded-production-oracle-db.html#GUID-F2334FB4-3FE6-4B75-A5DE-2FE2F9A4C8E4"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
});