Object.defineProperties(PerformanceResourceTiming.prototype, {
        deltaTiming: {
		get: function()    { return this.responseStart - this.requestStart;  }
        }
});

