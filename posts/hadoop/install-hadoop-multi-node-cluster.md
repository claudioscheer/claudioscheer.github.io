# Install Hadoop in a multi-node cluster scenario

This tutorial is part of [this](https://github.com/claudioscheer/hadoop-hello-world) project.

The full documentation for each edited file can be found here:

- [core-site.xml](https://hadoop.apache.org/docs/r3.3.0/hadoop-project-dist/hadoop-common/core-default.xml)
- [hdfs-site.xml](https://hadoop.apache.org/docs/r3.3.0/hadoop-project-dist/hadoop-hdfs/hdfs-default.xml)
- [mapred-site.xml](https://hadoop.apache.org/docs/r3.3.0/hadoop-mapreduce-client/hadoop-mapreduce-client-core/mapred-default.xml)
- [yarn-site.xml](https://hadoop.apache.org/docs/r3.3.0/hadoop-yarn/hadoop-yarn-common/yarn-default.xml)

### General setup

- Run the following [this](https://github.com/claudioscheer/hadoop-hello-world/blob/master/scripts/hadoop-base-setup.sh) script on each node. This will install Hadoop 3.3.0 on your `$HOME`.

### Namenode setup

- Edit `$HADOOP_HOME/etc/hadoop/core-site.xml` to:

```xml
<configuration>
        <property>
                <name>fs.defaultFS</name>
                <value>hdfs://hadoop-namenode:9000/</value>
        </property>
</configuration>
```

- Edit `$HADOOP_HOME/etc/hadoop/hdfs-site.xml` to:

```xml
<configuration>
        <property>
                <name>dfs.datanode.data.dir</name>
                <value>/home/hadoop/hadoop-data/datanode</value>
                <final>true</final>
        </property>
        <property>
                <name>dfs.namenode.name.dir</name>
                <value>/home/hadoop/hadoop-data/namenode</value>
                <final>true</final>
        </property>
        <property>
                <name>dfs.replication</name>
                <value>2</value>
        </property>
        <property>
                <name>dfs.permissions</name>
                <value>false</value>
        </property>
        <property>
                <name>dfs.namenode.datanode.registration.ip-hostname-check</name>
                <value>false</value>
        </property>
</configuration>
```

- Edit `$HADOOP_HOME/etc/hadoop/mapred-site.xml` to:

```xml
<configuration>
        <property>
                <name>mapreduce.framework.name</name>
                <value>yarn</value>
        </property>
        <property>
                <name>mapreduce.jobhistory.address</name>
                <value>hadoop-namenode:10020</value>
        </property>
        <property>
                <name>mapreduce.jobhistory.webapp.address</name>
                <value>hadoop-namenode:19888</value>
        </property>
        <property>
                <name>mapreduce.jobhistory.intermediate-done-dir</name>
                <value>/home/hadoop/mapred-history/tmp</value>
        </property>
        <property>
                <name>mapreduce.jobhistory.done-dir</name>
                <value>/home/hadoop/mapred-history/done</value>
        </property>
        <property>
                <name>mapreduce.application.classpath</name>
                <value>$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/*:$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/lib/*</value>
        </property>
</configuration>
```

- Edit `$HADOOP_HOME/etc/hadoop/yarn-site.xml` to:

```xml
<configuration>
        <property>
                <name>yarn.nodemanager.aux-services</name>
                <value>mapreduce_shuffle</value>
        </property>
        <property>
                <name>yarn.nodemanager.aux-services.mapreduce.shuffle.class</name>
                <value>org.apache.hadoop.mapred.ShuffleHandler</value>
        </property>
        <property>
                <name>yarn.nodemanager.log-dirs</name>
                <value>/home/hadoop/yarn-logs</value>
        </property>
        <property>
                <name>yarn.nodemanager.env-whitelist</name>
                <value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME</value>
        </property>
</configuration>
```

- Format namenode:

```bash
hdfs namenode -format
```

- Start HDFS processes:

```bash
start-dfs.sh
```

- Start Yarn:

```bash
start-yarn.sh
```

### Datanode setup

- Edit `$HADOOP_HOME/etc/hadoop/core-site.xml` to:

```xml
<configuration>
        <property>
                <name>fs.defaultFS</name>
                <value>hdfs://hadoop-namenode:9000/</value>
        </property>
</configuration>
```

- Edit `$HADOOP_HOME/etc/hadoop/hdfs-site.xml` to:

```xml
<configuration>
        <property>
                <name>dfs.datanode.data.dir</name>
                <value>/home/hadoop/hadoop-data/datanode</value>
                <final>true</final>
        </property>
        <property>
                <name>dfs.replication</name>
                <value>2</value>
        </property>
        <property>
                <name>dfs.permissions</name>
                <value>false</value>
        </property>
        <property>
                <name>dfs.namenode.datanode.registration.ip-hostname-check</name>
                <value>false</value>
        </property>
</configuration>
```

- Edit `$HADOOP_HOME/etc/hadoop/mapred-site.xml` to:

```xml
<configuration>
        <property>
                <name>mapreduce.framework.name</name>
                <value>yarn</value>
        </property>
</configuration>
```

- Edit `$HADOOP_HOME/etc/hadoop/yarn-site.xml` to:

```xml
<configuration>
        <property>
                <name>yarn.nodemanager.aux-services</name>
                <value>mapreduce_shuffle</value>
        </property>
        <property>
                <name>yarn.resourcemanager.hostname</name>
                <value>hadoop-master</value>
        </property>
</configuration>
```

- Format namenode:

```bash
hdfs namenode -format
```

- Start HDFS processes:

```bash
start-dfs.sh
```
