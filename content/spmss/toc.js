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
                    "href":"preface.html#GUID-C047252D-FDB1-4E65-8112-6D52E3E0D163"
                },
                {
                    "title":"<span class=\"secnum\">1 </span> Preparing Servers and Network for Database Duplication",
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
                    "title":"<span class=\"secnum\">2 </span> Preparing the Primary Instance on the Source Host",
                    "href":"preparing-the-primary-instance-source-host.html#GUID-DC66D422-829E-4704-9A14-790154EED6CD",
                    "topics":[
                        {
                            "title":"Configuring SQL*Net to Prepare the Primary Instance on the Source Host",
                            "href":"configuring-sql-net-to-prepare-the-primary-instance.html#GUID-EE464279-7BCD-465A-A255-57AE3851CDDB"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">3 </span> Preparing the Auxiliary Instance on the Destination Host",
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
                    "title":"<span class=\"secnum\">4 </span> Duplicating the Primary Oracle Database",
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
                    "title":"<span class=\"secnum\">5 </span> Refresh and Switchover to the Physical Standby Oracle Database",
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
                }
            ]
        }
    ]
});