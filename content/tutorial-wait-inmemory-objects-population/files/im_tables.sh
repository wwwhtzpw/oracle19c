#!/bin/sh
# use bash shell
#
# Written by: Dominique.Jeunot@oracle.com
# 

export ORACLE_HOME=/u01/app/oracle/product/19.0.0/dbhome_1
PATH=$ORACLE_HOME/bin:$PATH; export PATH
export ORACLE_SID=ORCL
$ORACLE_HOME/bin/sqlplus "/ as sysdba" @/home/oracle/labs/inmemory_size.sql
$ORACLE_HOME/bin/sqlplus "/ as sysdba" @/home/oracle/labs/shutdown.sql
$ORACLE_HOME/bin/sqlplus "/ as sysdba" @/home/oracle/labs/startup.sql
$ORACLE_HOME/bin/sqlplus "/ as sysdba" @/home/oracle/labs/open_keystore.sql
$ORACLE_HOME/bin/sqlplus "/ as sysdba" @/home/oracle/labs/create_pdb1.sql
$ORACLE_HOME/bin/sqlplus "sys/Welcome-1@PDB1 as sysdba" @/home/oracle/labs/create_oe_user.sql
$ORACLE_HOME/bin/sqlplus "system/Welcome-1@PDB1" @/home/oracle/labs/create_im_tables.sql
$ORACLE_HOME/bin/sqlldr oe/Welcome-1@PDB1 control=/home/oracle/labs/control_part.ctl
$ORACLE_HOME/bin/sqlldr oe/Welcome-1@PDB1 control=/home/oracle/labs/control_date.ctl
$ORACLE_HOME/bin/sqlldr oe/Welcome-1@PDB1 control=/home/oracle/labs/control_lineorder.ctl
$ORACLE_HOME/bin/sqlldr oe/Welcome-1@PDB1 control=/home/oracle/labs/control_lineorder2.ctl
$ORACLE_HOME/bin/sqlldr oe/Welcome-1@PDB1 control=/home/oracle/labs/control_supplier.ctl
$ORACLE_HOME/bin/sqlldr oe/Welcome-1@PDB1 control=/home/oracle/labs/control_customer.ctl
$ORACLE_HOME/bin/sqlplus "system/Welcome-1@PDB1" @/home/oracle/labs/load_im_tables.sql
