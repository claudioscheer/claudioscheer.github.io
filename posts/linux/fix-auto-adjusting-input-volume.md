# Disable auto adjusting microphone volume Ubuntu

I could not find another way to do this. Therefore, this is a workaround for this really annoying problem.

### Find your device

```bash
pacmd list-sources | grep name:
```

The name will be similar to `name: <alsa_input.???-?????.analog-stereo>`.

### Run the script

```bash
while sleep 0.1; do pacmd set-source-volume alsa_input.???-?????.analog-stereo 65535; done
```

65535 is 100%. You can choose the value you want. Use `printf '(65535 * 75) / 100\n' | bc` to find out the value.
