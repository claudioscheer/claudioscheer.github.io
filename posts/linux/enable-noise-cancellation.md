# Enable noise cancellation Ubuntu

### Find your device

Add the following lines to `/etc/pulse/default.pa`:

```
load-module module-echo-cancel source_name=noechosource sink_name=noechosink
set-default-source noechosource
set-default-sink noechosink
```

### Run

```bash
pulseaudio -k
```
