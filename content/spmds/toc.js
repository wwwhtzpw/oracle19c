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
                    "href":"preface.html#GUID-7652CDB7-F32C-4E26-AE4B-045795FD9A6B"
                },
                {
                    "title":"<span class=\"secnum\">1 </span> Migrating Data Using Transportable Tablespaces",
                    "href":"transportable-tablespaces.html#GUID-65DF5CB7-A79E-41DF-BCD3-51A55B7B512D",
                    "topics":[
                        {
                            "title":"Transporting Data Across Platforms",
                            "href":"transporting-data-across-platforms.html#GUID-FE3003B9-605A-4269-B167-005AC778C870"
                        },
                        {
                            "title":"General Limitations on Transporting Data",
                            "href":"general-limitations-on-transporting-data.html#GUID-28800719-6CB9-4A71-95DD-4B61AA603173"
                        },
                        {
                            "title":"Compatibility Considerations for Transporting Data",
                            "href":"compatibility-considerations-for-transporting-data.html#GUID-AC5C8D9D-796A-4EDE-AC35-AF963ECCFE5C"
                        },
                        {
                            "title":"Limitations on Transportable Tablespaces",
                            "href":"limitations-on-transportable-tablespaces.html#GUID-DAB51E42-9BBC-4001-B5CB-0ECDBE128787"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">2 </span> Preparing the Target Server",
                    "href":"preparing-the-target-server.html#GUID-4D4B2FB3-FC07-4F46-9960-902CBBDCD9A9"
                },
                {
                    "title":"<span class=\"secnum\">3 </span> Converting Data to the Endian Format of the Target Operating System",
                    "href":"converting-data-files.html#GUID-3CF0CDDF-3C65-4254-ADF0-BA3E0908EEE3",
                    "topics":[
                        {
                            "title":"Converting Data Between Platforms",
                            "href":"converting-data-between-platforms.html#GUID-E4B0F929-79D0-4DEE-B1DD-378BDBC31A0B"
                        },
                        {
                            "title":"Converting Data Between Platforms Using the DBMS_FILE_TRANSFER Package",
                            "href":"converting-data-using-the-dbms-file-transfer-package.html#GUID-1F6EA48A-92A8-45DE-8DFF-30E424B61C43"
                        },
                        {
                            "title":"Converting Data Between Platforms Using RMAN",
                            "href":"converting-data-using-rman.html#GUID-DDFA71A3-396A-440A-B9AB-E0970F843904"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">4 </span> Connecting to the Database with SQL*Plus",
                    "href":"connecting-to-the-database-with-sql-plus.html#GUID-7842AF72-DA25-4559-A8E7-9883D0C63BF2",
                    "topics":[
                        {
                            "title":"Step 1: Open a Command Window",
                            "href":"step-1-open-a-command-window.html#GUID-9563BFC5-2A73-4271-9108-B4149018B8AD"
                        },
                        {
                            "title":"Step 2: Set Operating System Environment Variables",
                            "href":"step-2-set-operating-system-environment-variables.html#GUID-ED528602-A8AC-4FCC-AA55-A36277A66A23"
                        },
                        {
                            "title":"Step 3: Start SQL*Plus",
                            "href":"step-3-start-sql-plus.html#GUID-6D8BABE7-1B9F-4890-B01D-6A91F3E77349"
                        },
                        {
                            "title":"Step 4: Submit the SQL*Plus CONNECT Command",
                            "href":"step-4-submit-the-sql-plus-connect-command.html#GUID-991445B9-EA9E-481E-A33D-E737F2DD9CFB"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">5 </span> Migrating Oracle Database",
                    "href":"migrating-oracle-database.html#GUID-F224185E-6AEC-45FC-B4F3-7F8B6469606D",
                    "topics":[
                        {
                            "title":"Checking Character Set Compatibility",
                            "href":"checking-character-set-compatibility.html#GUID-57DE97DF-228E-4DE7-94C5-EDAB329BB2B2"
                        },
                        {
                            "title":"Transporting Tablespaces Between Databases",
                            "href":"transporting-tablespaces-between-databases.html#GUID-E4C56852-73A5-44A2-BB10-938831DA6E4C"
                        },
                        {
                            "title":"Task 1: Pick a Self-Contained Set of Tablespaces",
                            "href":"task-1-pick-a-self-contained-set-of-tablespaces.html#GUID-BF7A7711-499D-4E54-A3E9-D51950E562B2"
                        },
                        {
                            "title":"Task 2: Generate a Transportable Tablespace Set",
                            "href":"task-2-generate-a-transportable-tablespace-set.html#GUID-95D18E42-D533-46B7-9910-291EACFF06AD"
                        },
                        {
                            "title":"Task 3: Transport the Export Dump File",
                            "href":"task-3-transport-the-export-dump-file.html#GUID-CEDFBF9B-3A3B-43D4-9FF2-84EA2537BA8C"
                        },
                        {
                            "title":"Task 4: Transport the Tablespace Set",
                            "href":"task-4-transport-the-tablespace-set.html#GUID-41D10DCA-7733-4E4C-A41A-B94F63A82F7C"
                        },
                        {
                            "title":"Task 5: (Optional) Restore Tablespaces to Read/Write Mode",
                            "href":"task-5-restore-tablespaces-to-read-write-mode.html#GUID-089D9EC2-4736-4B6F-9CF2-B78206110224"
                        },
                        {
                            "title":"Task 6: Import the Tablespace Set",
                            "href":"task-6-import-the-tablespace-set.html#GUID-CD4A446A-3DCA-4488-A381-47390A4F2CFF"
                        },
                        {
                            "title":"Postmigration Tasks",
                            "href":"postmigration-tasks.html#GUID-F5F4DBC2-11A3-4A51-9ADF-BA56863314D7"
                        }
                    ]
                }
            ]
        }
    ]
});