# Real-time behavior and backpressure

For systems that need stable responsiveness, control unbounded work. Use bounded queues, deadlines, cancellation, admission control, and explicit overload responses where appropriate.

The language cannot guarantee “smoothness” without defining scheduler semantics and platform constraints. Hard real-time guarantees require worst-case timing analysis and a compatible runtime/target; average benchmark results are not enough.
