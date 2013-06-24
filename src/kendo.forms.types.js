(function (kendo) {
	kendo.forms = kendo.forms || {};
	
	function dateTimeUpgrade(index, val) {
		var input = $(val);

		input.kendoDateTimePicker({
			value: input.val().length > 0 ? new Date(input.val()) : null,
			min: input.attr('min') ? new Date(input.attr('min')) : new Date(1900, 0, 1),
			max: input.attr('max') ? new Date(input.attr('max')) : new Date(2099, 11, 31),
			// Step attribute is seconds, interval in minute
			interval: input.attr('step') ? Math.round(parseInt(input.attr('step'), 10)/60) : 30
		});
	}

	var typeUpgrades = [
		{ 
			type: 'color',
			upgrade: function(index, val) {
				$(val).kendoColorPicker({ palette: "basic" });
			}
		},
		{
			type: 'number',
			upgrade: function(index, val) {
				$(val).kendoNumericTextBox();
			}
		},
		{
			type: 'range',
			upgrade: function(index, val) {
				$(val).kendoSlider({
					showButtons: false,
					tickPlacement: 'none'
				});
			}
		},
		{
			type: 'file',
			upgrade: function(index, val) {
				$(val).kendoUpload();
			}
		},
		{
			type: 'datetime',
			upgrade: dateTimeUpgrade
		},
		{
			type: 'datetime-local',
			upgrade: dateTimeUpgrade
		},
		{
			type: 'time',
			upgrade: function(index, val) {
				var input = $(val),
					dummyDate = "2013-10-04 ";

				$(val).kendoTimePicker({
					value: input.val().length > 0 ? new Date(dummyDate + input.val()) : null,
					min: input.attr('min') ? new Date(dummyDate + input.attr('min')) : new Date(2049, 0, 1, 0, 0, 0),
					max: input.attr('max') ? new Date(dummyDate + input.attr('max')) : new Date(2099, 11, 31, 0, 0, 0),
					// Step attribute is seconds, interval in minute
					interval: input.attr('step') ? Math.round(parseInt(input.attr('step'), 10)/60) : 30
				});
			}
		}
	];

	kendo.forms.types = typeUpgrades;
} (kendo));