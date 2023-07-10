# Android Virtual Devices (AVD) in command line

### Install dependencies

```bash
$ANDROID_HOME/tools/bin/sdkmanager "system-images;android-28;google_apis;x86_64" "emulator"
```

### Create AVD

```bash
$ANDROID_HOME/tools/bin/avdmanager create avd --force -n Nexus6P --package "system-images;android-28;google_apis;x86_64" --device "Nexus 6P"
```

### Run AVD

```bash
$ANDROID_HOME/emulator/emulator -avd Nexus6P
```

### Delete AVD

```bash
$ANDROID_HOME/tools/bin/avdmanager delete avd -n Nexus6P
```
