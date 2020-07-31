const mapConfig = {
  scope: 'usa',
  data: null,
  fills: {
    defaultFill: '#ddd'
  },
  geographyConfig: {
    borderColor: '#888',
    borderWidth: .5,
    highlightBorderWidth: .5,
    highlightBorderColor: 'black',
    highlightFillColor: '#0c9',
    popupTemplate: function(geography, data) {
      if (!data) {
        return;
      }
      return [
        '<div class="hoverinfo">',
        '<center><strong>',
        geography.properties.name,
        '</strong>',
        '<br><br><strong>Total: <strong><br>',
        Number(data.total),
        '</center>',
        '</div>'
      ].join('');
    }
  }
};

export default mapConfig;