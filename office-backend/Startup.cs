using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore;
using office_backend.Models;
using office_backend.Persistence.Repositories;

namespace office_backend
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();

            services.AddScoped<ProjectRepository>();
            services.AddScoped<UserRepository>();


            //string connectionString = @"Integrated Security=SSPI;Initial Catalog=Office_Replica;Data Source=DESKTOP-55UQPR6\SQLEXPRESS;";
            //string connectionString = @"data source=DESKTOP-55UQPR6\SQLEXPRESS;initial catalog=Office_Replica;persist security info=True;user id=DESKTOP-55UQPR6\Smith Gaddy;password=;MultipleActiveResultSets=True;App=EntityFramework";
            string connectionString = @"Server=DESKTOP-55UQPR6\SQLEXPRESS;Database=Office_Replica;Trusted_Connection=True;MultipleActiveResultSets=true";


            services.AddDbContext<Office_ReplicaContext>(options => {
                options.UseSqlServer(connectionString);
            });
            /*
            services.AddCors(options => {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                builder => {
                                    builder.WithOrigins("http://localhost");
                                });
            });
            */
            services.AddCors(options =>
            {
                options.AddPolicy(name: "MyPolicy",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:4200",
                                            "http://localhost:44327/api/project",
                                            "*")
                                .AllowAnyHeader();
                    });
            });


            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "office_backend", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "office_backend v1"));
            }

            app.UseHttpsRedirection();

          

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("MyPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
