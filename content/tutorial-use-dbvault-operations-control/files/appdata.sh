#!/bin/sh
# use bash shell
#
# Written by: Dominique.Jeunot@oracle.com
#

export ORACLE_HOME=/u01/app/oracle/product/19.0.0/dbhome_1
PATH=$ORACLE_HOME/bin:$PATH; export PATH

$ORACLE_HOME/bin/sqlplus "sys/Welcome-1@PDB1 as sysdba" @/u01/app/oracle/product/19.0.0/dbhome_1/demo/schema/human_resources/hr_main.sql Welcome-1 users temp /tmp