# Install Hadoop in a multi-node cluster scenario

This tutorial is part of [this](https://github.com/claudioscheer/hadoop-hello-world) project.

The full documentation for each edited file can be found here:

- [core-site.xml](https://hadoop.apache.org/docs/r3.3.0/hadoop-project-dist/hadoop-common/core-default.xml)
- [hdfs-site.xml](https://hadoop.apache.org/docs/r3.3.0/hadoop-project-dist/hadoop-hdfs/hdfs-default.xml)
- [mapred-site.xml](https://hadoop.apache.org/docs/r3.3.0/hadoop-mapreduce-client/hadoop-mapreduce-client-core/mapred-default.xml)
- [yarn-site.xml](https://hadoop.apache.org/docs/r3.3.0/hadoop-yarn/hadoop-yarn-common/yarn-default.xml)

### General setup

- Run the following [this](https://github.com/claudioscheer/hadoop-hello-world/blob/master/scripts/hadoop-base-setup.sh) script on each node. This will install Hadoop 3.3.0 on your `$HOME`.

### Namenode and datanode setup

- Edit `$HADOOP_HOME/etc/hadoop/core-site.xml` to:

```xml
<configuration>
        <property>
                <name>fs.defaultFS</name>
                <value>hdfs://hadoop-namenode:9000</value>
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
                <name>yarn.app.mapreduce.am.env</name>
                <value>HADOOP_MAPRED_HOME=$HADOOP_HOME</value>
        </property>
        <property>
                <name>mapreduce.map.env</name>
                <value>HADOOP_MAPRED_HOME=$HADOOP_HOME</value>
        </property>
        <property>
                <name>mapreduce.reduce.env</name>
                <value>HADOOP_MAPRED_HOME=$HADOOP_HOME</value>
        </property>
        <property>
                <name>yarn.app.mapreduce.am.resource.mb</name>
                <value>1024</value>
        </property>
        <property>
                <name>mapreduce.map.memory.mb</name>
                <value>256</value>
        </property>
        <property>
                <name>mapreduce.reduce.memory.mb</name>
                <value>256</value>
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
                <value>hadoop-namenode</value>
        </property>
        <property>
                <name>yarn.nodemanager.resource.memory-mb</name>
                <value>3072</value>
        </property>
        <property>
                <name>yarn.scheduler.minimum-allocation-mb</name>
                <value>128</value>
        </property>
        <property>
                <name>yarn.scheduler.maximum-allocation-mb</name>
                <value>3072</value>
        </property>
        <property>
                <name>yarn.nodemanager.vmem-check-enabled</name>
                <value>false</value>
        </property>
</configuration>
```

### Only for namenode

- Edit `$HADOOP_HOME/etc/hadoop/workers` to:

```
hadoop-datanode-1
hadoop-datanode-2
```

- Format HDFS:

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
