webpackJsonp([0x86ab6b2ef3dc],{428:function(e,t){e.exports={data:{remark:{html:'<h2 id="using-postgraphile-as-a-library"><a href="#using-postgraphile-as-a-library" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using PostGraphile as a Library</h2>\n<p>Some people may want to use PostGraphile as a dependency of their current\nNode.js projects instead of as a CLI tool. If this is the approach you want to\ntake then you may either use PostGraphile as an HTTP middleware, or create and\nexecute queries against a PostGraphile schema using your own custom code. In\nthis article we will go the former, for the latter see <a href="/postgraphile/usage-schema/">Schema-only\nUsage</a>.</p>\n<h3 id="http-middleware"><a href="#http-middleware" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTTP Middleware</h3>\n<p>To mount a PostGraphile instance on your own web server there is an export\n<code class="language-text">postgraphile</code> from the <code class="language-text">postgraphile</code> package that can be used as HTTP\nmiddleware for the following HTTP frameworks:</p>\n<ul>\n<li><a href="http://npmjs.com/connect"><code class="language-text">connect</code></a></li>\n<li><a href="https://www.npmjs.com/package/express"><code class="language-text">express</code></a></li>\n<li><a href="https://nodejs.org/api/http.html">Vanilla <code class="language-text">http</code></a></li>\n</ul>\n<p><em>We also have alpha-quality support for <a href="https://www.npmjs.com/package/koa"><code class="language-text">koa</code>\n2.0</a>, if you notice any problems please raise a GitHub issue about it.</em></p>\n<p>To use PostGraphile with <code class="language-text">express</code>, for instance, just do the following:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> postgraphile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"postgraphile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">postgraphile</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DATABASE_URL</span> <span class="token operator">||</span> <span class="token string">"postgres://localhost/"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Or to use it with the built-in <code class="language-text">http</code> module:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"http"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> postgraphile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"postgraphile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nhttp\n  <span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>\n    <span class="token function">postgraphile</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DATABASE_URL</span> <span class="token operator">||</span> <span class="token string">"postgres://localhost/"</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h4 id="api-postgraphilepgconfig-schemaname-options"><a href="#api-postgraphilepgconfig-schemaname-options" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API: <code class="language-text">postgraphile(pgConfig, schemaName, options)</code></h4>\n<p>The <code class="language-text">postgraphile</code> middleware factory function takes three arguments, all of which are optional.</p>\n<ul>\n<li><strong><code class="language-text">pgConfig</code></strong>: An object or string that will be passed to the <a href="https://www.npmjs.com/pg"><code class="language-text">pg</code></a> library and used to connect to a PostgreSQL backend, OR a pg.Pool to use.</li>\n<li><strong><code class="language-text">schemaName</code></strong>: A string, or array of strings, which specifies the PostgreSQL schema(s) you to expose via PostGraphile; defaults to \'public\'</li>\n<li>\n<p><strong><code class="language-text">options</code></strong>: An object containing other miscellaneous options. Options include: <!-- LIBRARY_DOCBLOCK_BEGIN --></p>\n<ul>\n<li><code class="language-text">watchPg</code>: When true, PostGraphile will watch your database schemas and re-create the GraphQL API whenever your schema changes, notifying you as it does. This feature requires an event trigger to be added to the database by a superuser. When enabled PostGraphile will try to add this trigger, if you did not connect as a superuser you will get a warning and the trigger won’t be added. The trigger will not be removed, to remove it run:   <code class="language-text">drop schema postgraphile_watch cascade;</code></li>\n<li><code class="language-text">pgDefaultRole</code>: The default Postgres role to use. If no role was provided in a provided JWT token, this role will be used.</li>\n<li><code class="language-text">dynamicJson</code>: By default, JSON and JSONB fields are presented as strings (JSON encoded) from the GraphQL schema. Setting this to <code class="language-text">true</code> (recommended) enables raw JSON input and output, saving the need to parse / stringify JSON manually.</li>\n<li><code class="language-text">setofFunctionsContainNulls</code>: If none of your <code class="language-text">RETURNS SETOF compound_type</code> functions mix NULLs with the results then you may set this true to reduce the nullables in the GraphQL schema.</li>\n<li><code class="language-text">classicIds</code>: Enables classic ids for Relay support. Instead of using the field name <code class="language-text">nodeId</code> for globally unique ids, PostGraphile will instead use the field name <code class="language-text">id</code> for its globally unique ids. This means that table <code class="language-text">id</code> columns will also get renamed to <code class="language-text">rowId</code>.</li>\n<li><code class="language-text">disableDefaultMutations</code>: Setting this to <code class="language-text">true</code> will prevent the creation of the default mutation types &#x26; fields. Database mutation will only be possible through Postgres functions.</li>\n<li><code class="language-text">ignoreRBAC</code>: Set false (recommended) to exclude fields, queries and mutations that the user isn\'t permitted to access from the generated GraphQL schema; set this option true to skip these checks and create GraphQL fields and types for everything. The default is <code class="language-text">true</code>, in v5 the default will change to <code class="language-text">false</code>.</li>\n<li><code class="language-text">includeExtensionResources</code>: By default, tables and functions that come from extensions are excluded from the generated GraphQL schema as general applications don\'t need them to be exposed to the end user. You can use this flag to include them in the generated schema (not recommended).</li>\n<li><code class="language-text">showErrorStack</code>: Enables adding a <code class="language-text">stack</code> field to the error response.  Can be either the boolean <code class="language-text">true</code> (which results in a single stack string) or the string <code class="language-text">json</code> (which causes the stack to become an array with elements for each line of the stack). Recommended in development, not recommended in production.</li>\n<li><code class="language-text">extendedErrors</code>: Extends the error response with additional details from the Postgres error.  Can be any combination of <code class="language-text">[&#39;hint&#39;, &#39;detail&#39;, &#39;errcode&#39;]</code>. Default is <code class="language-text">[]</code>.</li>\n<li><code class="language-text">handleErrors</code>: Enables ability to modify errors before sending them down to the client. Optionally can send down custom responses. If you use this then <code class="language-text">showErrorStack</code> and <code class="language-text">extendedError</code> may have no effect.</li>\n<li><code class="language-text">appendPlugins</code>: An array of <a href="/graphile-build/plugins/">Graphile Build</a> plugins to load after the default plugins.</li>\n<li><code class="language-text">prependPlugins</code>: An array of <a href="/graphile-build/plugins/">Graphile Build</a> plugins to load before the default plugins (you probably don\'t want this).</li>\n<li><code class="language-text">replaceAllPlugins</code>: The full array of <a href="/graphile-build/plugins/">Graphile Build</a> plugins to use for schema generation (you almost definitely don\'t want this!).</li>\n<li><code class="language-text">readCache</code>: A file path string. Reads cached values from local cache file to improve startup time (you may want to do this in production).</li>\n<li><code class="language-text">writeCache</code>: A file path string. Writes computed values to local cache file so startup can be faster (do this during the build phase).</li>\n<li><code class="language-text">exportJsonSchemaPath</code>: Enables saving the detected schema, in JSON format, to the given location. The directories must exist already, if the file exists it will be overwritten.</li>\n<li><code class="language-text">exportGqlSchemaPath</code>: Enables saving the detected schema, in GraphQL schema format, to the given location. The directories must exist already, if the file exists it will be overwritten.</li>\n<li><code class="language-text">graphqlRoute</code>: The endpoint the GraphQL executer will listen on. Defaults to <code class="language-text">/graphql</code>.</li>\n<li><code class="language-text">graphiqlRoute</code>: The endpoint the GraphiQL query interface will listen on (<strong>NOTE:</strong> GraphiQL will not be enabled unless the <code class="language-text">graphiql</code> option is set to <code class="language-text">true</code>). Defaults to <code class="language-text">/graphiql</code>.</li>\n<li><code class="language-text">graphiql</code>: Set this to <code class="language-text">true</code> to enable the GraphiQL interface.</li>\n<li><code class="language-text">enableCors</code>: Enables some generous CORS settings for the GraphQL endpoint. There are some costs associated when enabling this, if at all possible try to put your API behind a reverse proxy.</li>\n<li><code class="language-text">bodySizeLimit</code>: Set the maximum size of JSON bodies that can be parsed (default 100kB). The size can be given as a human-readable string, such as \'200kB\' or \'5MB\' (case insensitive).</li>\n<li><code class="language-text">enableQueryBatching</code>: [Experimental] Enable the middleware to process multiple GraphQL queries in one request</li>\n<li><code class="language-text">jwtSecret</code>: The secret for your JSON web tokens. This will be used to verify tokens in the <code class="language-text">Authorization</code> header, and signing JWT tokens you return in procedures.</li>\n<li><code class="language-text">jwtVerifyOptions</code>: Options with which to perform JWT verification - see <a href="https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback">https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback</a> If \'audience\' property is unspecified, it will default to [\'postgraphile\']; to prevent audience verification set it explicitly to null.</li>\n<li><code class="language-text">jwtRole</code>: A comma separated list of strings that give a path in the jwt from which to extract the postgres role. If none is provided it will use the key <code class="language-text">role</code> on the root of the jwt.</li>\n<li><code class="language-text">jwtPgTypeIdentifier</code>: The Postgres type identifier for the compound type which will be signed as a JWT token if ever found as the return type of a procedure. Can be of the form: <code class="language-text">my_schema.my_type</code>. You may use quotes as needed: <code class="language-text">&quot;my-special-schema&quot;.my_type</code>.</li>\n<li><code class="language-text">jwtAudiences</code>: [DEPRECATED] The audience to use when verifing the JWT token. Deprecated, use <code class="language-text">jwtVerifyOptions.audience</code> instead.</li>\n<li><code class="language-text">legacyRelations</code>: Some one-to-one relations were previously detected as one-to-many - should we export \'only\' the old relation shapes, both new and old but mark the old ones as \'deprecated\' (default), or \'omit\' (recommended) the old relation shapes entirely.</li>\n<li><code class="language-text">legacyJsonUuid</code>: ONLY use this option if you require the v3 typenames \'Json\' and \'Uuid\' over \'JSON\' and \'UUID\'.</li>\n<li><code class="language-text">disableQueryLog</code>: Turns off GraphQL query logging. By default PostGraphile will log every GraphQL query it processes along with some other information. Set this to <code class="language-text">true</code> (recommended in production) to disable that feature.</li>\n<li><code class="language-text">pgSettings</code>: A plain object specifying custom config values to set in the PostgreSQL transaction (accessed via <code class="language-text">current_setting(&#39;my.custom.setting&#39;)</code>) or a function which will return the same (or a Promise to the same) based on the incoming web request (e.g. to extract session data)</li>\n<li><code class="language-text">additionalGraphQLContextFromRequest</code>: Some graphile-build plugins may need additional information available on the <code class="language-text">context</code> argument to the resolver - you can use this function to provide such information based on the incoming request - you can even use this to change the response [experimental], e.g. setting cookies</li>\n<li><code class="language-text">pluginHook</code>: [experimental] Plugin hook function, enables functionality within PostGraphile to be expanded with plugins. Generate with <code class="language-text">makePluginHook(plugins)</code> passing a list of plugin objects.</li>\n<li><code class="language-text">simpleCollections</code>: Should we use relay pagination, or simple collections? "omit" (default) - relay connections only, "only" (not recommended) - simple collections only (no Relay connections), "both" - both</li>\n</ul>\n</li>\n</ul>\n<!-- LIBRARY_DOCBLOCK_END -->\n<p>The following options and not part of PostGraphile core, but are available from the Supporter and/or Pro plugins - see <a href="/postgraphile/pricing/">Go Pro!</a> for more information.</p>\n<ul>\n<li>\n<p><strong><code class="language-text">options</code></strong>:</p>\n<ul>\n<li><code class="language-text">simpleSubscriptions</code>: [SUPPORTER] ⚡️[experimental] set this to <code class="language-text">true</code> to add simple subscription support</li>\n<li><code class="language-text">subscriptionAuthorizationFunction [fn]</code> [SUPPORTER] ⚡️[experimental] set this to the name (excluding arguments/parentheses) of a PG function to call to check user is allowed to subscribe</li>\n<li><code class="language-text">readOnlyConnection</code> [PRO] ⚡️[experimental] set this to a PostgreSQL connection string to use for read-only queries (i.e. not mutations)</li>\n<li><code class="language-text">defaultPaginationCap</code> [PRO] ⚡️[experimental] integer, ensure all connections have first/last specified and are no large than this value (default: 50), set to -1 to disable; override via smart comment <code class="language-text">@paginationCap 50</code></li>\n<li><code class="language-text">graphqlDepthLimit</code> [PRO] ⚡️[experimental] integer, validate GraphQL queries are no deeper than the specified int (default: 16), set to -1 to disable</li>\n<li><code class="language-text">graphqlCostLimit</code> [PRO] ⚡️[experimental] integer, only allows queries with a computed cost below the specified int (default: 1000), set to -1 to disable</li>\n<li><code class="language-text">exposeGraphQLCost</code> [PRO] boolean, if true (default) then the calculated query cost will be exposed on the resulting payload</li>\n</ul>\n</li>\n</ul>\n<h3 id="exposing-http-request-data-to-postgresql"><a href="#exposing-http-request-data-to-postgresql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exposing HTTP request data to PostgreSQL</h3>\n<h4 id="pgsettings-function"><a href="#pgsettings-function" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">pgSettings</code> function</h4>\n<p>Using the <code class="language-text">pgSettings</code> functionality mentioned above you can extend the data\nmade available through <code class="language-text">current_setting(...)</code> within PostgreSQL. Instead of\npassing an object you can pass a function which will be executed for each\nrequest, and the results merged in with the other settings PostGraphile\nautomatically adds to the request.</p>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">export</span> <span class="token function">postgraphile</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DATABASE_URL</span><span class="token punctuation">,</span> schemaName<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  pgSettings<span class="token punctuation">:</span> req <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'user.id\'</span><span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>session<span class="token punctuation">.</span>passport<span class="token punctuation">.</span>user<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n    <span class="token string">\'http.headers.x-something\'</span><span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">\'x-something\'</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n    <span class="token string">\'http.method\'</span><span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n    <span class="token string">\'http.url\'</span><span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">,</span>\n    <span class="token comment">//...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-sql"><code class="language-sql"><span class="token keyword">create</span> <span class="token keyword">function</span> get_x_something<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">returns</span> <span class="token keyword">text</span> <span class="token keyword">as</span> $$\n  <span class="token keyword">select</span> current_setting<span class="token punctuation">(</span><span class="token string">\'http.headers.x-something\'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>::<span class="token keyword">text</span><span class="token punctuation">;</span>\n$$ <span class="token keyword">language</span> <span class="token keyword">sql</span> stable<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>TODO: verify the above works.</p>\n<p>TODO: move this to its own article?</p>',frontmatter:{path:"/postgraphile/usage-library/",title:"PostGraphile as a Library"}},nav:{edges:[{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [0] >>> JSON",name:"graphile-build",sections:[{id:"guides",title:"Overview"},{id:"library-reference",title:"Using the Library"},{id:"plugin-reference",title:"Building a Plugin"}],pages:[{to:"/graphile-build/getting-started/",title:"Getting Started",sectionId:"guides"},{to:"/graphile-build/plugins/",title:"Plugins",sectionId:"guides"},{to:"/graphile-build/hooks/",title:"Hooks",sectionId:"guides"},{to:"/graphile-build/look-ahead/",title:"Look Ahead",sectionId:"guides"},{to:"/graphile-build/graphile-build/",title:"graphile-build",sectionId:"library-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"library-reference"},{to:"/graphile-build/plugin-options/",title:"Options",sectionId:"library-reference"},{to:"/graphile-build/default-plugins/",title:"Default Plugins",sectionId:"library-reference"},{to:"/graphile-build/omitting-plugins/",title:"Omitting Plugins",sectionId:"guides"},{to:"/graphile-build/all-hooks/",title:"All Hooks",sectionId:"plugin-reference"},{to:"/graphile-build/build-object/",title:"Build Object",sectionId:"plugin-reference"},{to:"/graphile-build/context-object/",title:"Context Object",sectionId:"plugin-reference"},{to:"/graphile-build/schema-builder/",title:"SchemaBuilder",sectionId:"plugin-reference"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [1] >>> JSON",name:"postgraphile",sections:[{id:"overview",title:"Overview"},{id:"guides",title:"Guides"},{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/introduction/",title:"Introduction",sectionId:"overview"},{to:"/postgraphile/quick-start-guide/",title:"Quick Start Guide",sectionId:"overview"},{to:"/postgraphile/evaluating/",title:"Evaluating for your Project",sectionId:"guides"},{to:"/postgraphile/requirements/",title:"Requirements",sectionId:"overview"},{to:"/postgraphile/performance/",title:"Performance",sectionId:"overview"},{to:"/postgraphile/connections/",title:"Connections",sectionId:"overview"},{to:"/postgraphile/filtering/",title:"Filtering",sectionId:"overview"},{to:"/postgraphile/relations/",title:"Relations",sectionId:"overview"},{to:"/postgraphile/crud-mutations/",title:"CRUD Mutations",sectionId:"overview"},{to:"/postgraphile/computed-columns/",title:"Computed Columns",sectionId:"overview"},{to:"/postgraphile/custom-queries/",title:"Custom Queries",sectionId:"overview"},{to:"/postgraphile/custom-mutations/",title:"Custom Mutations",sectionId:"overview"},{to:"/postgraphile/smart-comments/",title:"Smart Comments",sectionId:"overview"},{to:"/postgraphile/security/",title:"Security",sectionId:"overview"},{to:"/postgraphile/introspection/",title:"Introspection",sectionId:"overview"},{to:"/postgraphile/extending/",title:"Schema Plugins",sectionId:"overview"},{to:"/postgraphile/plugins/",title:"Server Plugins",sectionId:"overview"},{to:"/postgraphile/subscriptions/",title:"Subscriptions",sectionId:"overview"},{to:"/postgraphile/production/",title:"Production Considerations",sectionId:"overview"},{to:"/postgraphile/reserved-keywords/",title:"Reserved Keywords",sectionId:"overview"},{to:"/postgraphile/debugging/",title:"Debugging",sectionId:"overview"},{to:"/postgraphile/jwt-guide/",title:"PostGraphile JWT Guide",sectionId:"guides"},{to:"/postgraphile/default-role/",title:"The Default Role",sectionId:"guides"},{to:"/postgraphile/procedures/",title:"PostgreSQL Procedures",sectionId:"guides"},{to:"/postgraphile/postgresql-schema-design/",title:"PostgreSQL Schema Design",sectionId:"guides"},{to:"/postgraphile/postgresql-indexes/",title:"PostgreSQL Indexes",sectionId:"guides"},{to:"/postgraphile/v4-new-features/",title:"v4 Feature Guide",sectionId:"guides"},{to:"/postgraphile/v3-migration/",title:"v3 → v4 Migration Guide",sectionId:"guides"},{to:"/postgraphile/usage-cli/",title:"CLI Usage",sectionId:"usage"},{to:"/postgraphile/usage-library/",title:"Library Usage",sectionId:"usage"},{to:"/postgraphile/usage-schema/",title:"Schema-only Usage",sectionId:"usage"}]}},{node:{id:"/Users/benjiegillam/Dev/graphile.org/src/data/nav.json absPath of file [2] >>> JSON",name:"graphile-build-pg",sections:[{id:"usage",title:"Usage"}],pages:[{to:"/postgraphile/settings/",title:"Settings",sectionId:"usage"}]}}]}},pathContext:{layout:"page"}}}});
//# sourceMappingURL=path---postgraphile-usage-library-23c7734e2267e436adbb.js.map