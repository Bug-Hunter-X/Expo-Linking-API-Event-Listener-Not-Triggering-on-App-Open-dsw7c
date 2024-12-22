# Expo Linking API Event Listener Not Triggering on App Open

This repository demonstrates a bug in the Expo `Linking` API where the `addEventListener` method fails to trigger when a deep link is opened while the app is already running.  The issue is specifically related to the scenario where the app is already active and receives a subsequent deep link.

## Bug Description

The `Linking.addEventListener` is expected to trigger with the received URL. However, the event listener remains inactive, resulting in the app not processing the deep link.

## How to Reproduce

1. Clone this repository.
2. Run the `bug.js` file.
3. Open the app.
4. While the app is running, tap a deep link which should update the app's state. Observe that the app does not receive or process the URL.

## Solution

The `deepLinkSolution.js` file provides a workaround for this issue. This solution usually involves checking for initial URLs on app mount and handling them within the component.