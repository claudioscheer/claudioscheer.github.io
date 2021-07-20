# Flip webcam video

### Install utilities

```bash
sudo apt-get update
sudo apt-get install v4l-utils
sudo apt-get install v4l2loopback-utils
```
Download [https://github.com/umlaeute/v4l2loopback](https://github.com/umlaeute/v4l2loopback) and uncompress it. Inside de uncompressed folder run

```bash
make
sudo make install
```

### Enable the device

```bash
sudo modprobe v4l2loopback exclusive_caps=1
```

### Check if device is enabled

```bash
v4l2-ctl --list-devices
```

You might have a device named something like `Dummy video device`.

### Create stream

Copy the webcam video stream to it via `ffmpeg`.

```bash
ffmpeg -f v4l2 -framerate 60 -video_size 1920x1080 -input_format mjpeg -i /dev/video2 -vf "hflip,format=yuv420p" -f v4l2 /dev/video4
```

`/dev/video2` is the source device, while `/dev/video4` is the destination. In this case, the destination is the "Dummy" device created before.

# References

- [https://unix.stackexchange.com/a/490040](https://unix.stackexchange.com/a/490040)
