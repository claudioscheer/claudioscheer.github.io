# Useful things about Hadoop

- Get detailed information about the HDFS cluster:

```bash
hdfs dfsadmin -report
```

- [hadoop-namenode:9870](http://hadoop-namenode:9870) accesses the web monitoring console for the HDFS cluster;
- [hadoop-namenode:8088](http://hadoop-namenode:8088) accesses the web monitoring console for Yarn;
- List Yarn running nodes:

```bash
yarn node -list
```

- List applications running:

```bash
yarn application -list
```

- Submit a job to Yarn:

```bash
yarn jar word-count.jar WordCount ...args
```

- Manage HDFS files:

```bash
hdfs dfs -ls /
hdfs dfs -mkdir /test
hdfs dfs -put foo.txt /test
hdfs dfs -cat /test/foo.txt
hdfs dfs -get /test/foo.txt ./foo-from-hdfs.txt
hdfs dfs -rm -r /test
```
