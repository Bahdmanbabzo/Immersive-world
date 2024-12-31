export default function sequencer(_target) {
    const sequences = {
        zoomOut: [_target.position, {z: -10}],
    }
    return sequences;
}