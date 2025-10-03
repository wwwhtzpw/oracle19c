CREATE TABLE hypt.hypt_inmem_tab (history_event NUMBER , time_id DATE) TABLESPACE ts1 
  EXTERNAL PARTITION ATTRIBUTES 
     (TYPE ORACLE_LOADER 
      DEFAULT DIRECTORY cent20 
      ACCESS PARAMETERS
       (FIELDS TERMINATED BY ',' (history_event, time_id DATE 'dd-MON-yyyy'))
      REJECT LIMIT UNLIMITED
     ) 
  PARTITION BY RANGE (time_id) 
   (PARTITION cent18 VALUES LESS THAN (TO_DATE('01-Jan-1800','dd-MON-yyyy')) 
                     EXTERNAL,
    PARTITION cent19 VALUES LESS THAN (TO_DATE('01-Jan-1900','dd-MON-yyyy')) 
                     EXTERNAL DEFAULT DIRECTORY cent19 LOCATION ('cent19.dat'),
    PARTITION cent20 VALUES LESS THAN (TO_DATE('01-Jan-2000','dd-MON-yyyy')) 
                     EXTERNAL LOCATION('cent20.dat'),
    PARTITION y2000 VALUES LESS THAN (TO_DATE('01-Jan-2001','dd-MON-yyyy'))
                    TABLESPACE ts2,
    PARTITION pmax VALUES LESS THAN (MAXVALUE))
  INMEMORY MEMCOMPRESS FOR QUERY HIGH;


