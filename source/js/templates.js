(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['result'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <small>("
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"subregion") || (depth0 != null ? lookupProperty(depth0,"subregion") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"subregion","hash":{},"data":data,"loc":{"start":{"line":14,"column":18},"end":{"line":14,"column":31}}}) : helper)))
    + ")</small>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "            <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"well search-result\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-4 col-md-4 col-lg-4\">\n      <img class=\"img-thumbnail\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"flag") || (depth0 != null ? lookupProperty(depth0,"flag") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flag","hash":{},"data":data,"loc":{"start":{"line":4,"column":38},"end":{"line":4,"column":46}}}) : helper)))
    + "\" />\n    </div>\n\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8\">\n      <h3>\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":9,"column":8},"end":{"line":9,"column":16}}}) : helper)))
    + " <small>("
    + alias4(((helper = (helper = lookupProperty(helpers,"alpha2") || (depth0 != null ? lookupProperty(depth0,"alpha2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alpha2","hash":{},"data":data,"loc":{"start":{"line":9,"column":25},"end":{"line":9,"column":35}}}) : helper)))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"alpha3") || (depth0 != null ? lookupProperty(depth0,"alpha3") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"alpha3","hash":{},"data":data,"loc":{"start":{"line":9,"column":36},"end":{"line":9,"column":46}}}) : helper)))
    + ")</small>\n      </h3>\n      <h4>\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"region") || (depth0 != null ? lookupProperty(depth0,"region") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"region","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":18}}}) : helper)))
    + "\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"isDefined")||(depth0 && lookupProperty(depth0,"isDefined"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"subregion") : depth0),{"name":"isDefined","hash":{},"data":data,"loc":{"start":{"line":13,"column":14},"end":{"line":13,"column":35}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":8},"end":{"line":15,"column":15}}})) != null ? stack1 : "")
    + "      </h4>\n      <p>\n        Population: "
    + alias4((lookupProperty(helpers,"formatNumber")||(depth0 && lookupProperty(depth0,"formatNumber"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"population") : depth0),{"name":"formatNumber","hash":{},"data":data,"loc":{"start":{"line":18,"column":20},"end":{"line":18,"column":47}}}))
    + "\n        <br>\n        Languages:\n        <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"language") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":22,"column":10},"end":{"line":24,"column":19}}})) != null ? stack1 : "")
    + "        </ul>\n      </p>\n    </div>\n  </div> \n</div> ";
},"useData":true});
templates['summary'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3 region-summary\">\n          <h5>Region: "
    + alias2(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"key","hash":{},"data":data,"loc":{"start":{"line":7,"column":22},"end":{"line":7,"column":30}}}) : helper)))
    + " <span class=\"badge\">"
    + alias2(container.lambda((depth0 != null ? lookupProperty(depth0,"count") : depth0), depth0))
    + "</span></h5>\n          <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"subregions") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":11,"column":21}}})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <li>"
    + alias1(((helper = (helper = lookupProperty(helpers,"key") || (data && lookupProperty(data,"key"))) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"key","hash":{},"data":data,"loc":{"start":{"line":10,"column":18},"end":{"line":10,"column":26}}}) : helper)))
    + " <span class=\"badge\">"
    + alias1(container.lambda(depth0, depth0))
    + "</span></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"summary\" class=\"well search-result\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <h4>Search returned "
    + alias3(((helper = (helper = lookupProperty(helpers,"count") || (depth0 != null ? lookupProperty(depth0,"count") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"count","hash":{},"data":data,"loc":{"start":{"line":4,"column":26},"end":{"line":4,"column":35}}}) : helper)))
    + " "
    + alias3((lookupProperty(helpers,"pluralize")||(depth0 && lookupProperty(depth0,"pluralize"))||alias2).call(alias1,"result",(depth0 != null ? lookupProperty(depth0,"count") : depth0),{"name":"pluralize","hash":{},"data":data,"loc":{"start":{"line":4,"column":36},"end":{"line":4,"column":64}}}))
    + "</h4>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"regions") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":14,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n  </div> \n</div> ";
},"useData":true});
})();