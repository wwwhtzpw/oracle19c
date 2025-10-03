set echo on
drop user c##dvo cascade;
create user c##dvo identified by Welcome_1 container=ALL;
grant create session, set container, restricted session, DV_OWNER to c##dvo container=ALL;
drop user c##dva cascade;
create user c##dva identified by Welcome_1 container=ALL;
grant create session, set container, DV_ACCTMGR to c##dva container=ALL;
grant select on sys.dba_dv_status to c##dva container=ALL;

