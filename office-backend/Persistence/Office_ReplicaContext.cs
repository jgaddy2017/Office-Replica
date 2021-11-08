using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using office_backend.Models;


#nullable disable

namespace office_backend.Models
{
    public partial class Office_ReplicaContext : DbContext
    {
        public Office_ReplicaContext()
        {
        }

        public Office_ReplicaContext(DbContextOptions<Office_ReplicaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Project> Projects { get; set; }
        public virtual DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-55UQPR6\\SQLEXPRESS;Database=Office_Replica;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Project>(entity =>
            {
                entity.Property(e => e.ProjectId).ValueGeneratedNever();

                entity.Property(e => e.CreationDate).HasColumnType("datetime");

                entity.Property(e => e.LastModified).HasColumnType("datetime");

                entity.Property(e => e.ProjectName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ProjectType)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Projects)
                    .HasForeignKey(d => d.ProjectCreator)
                    .HasConstraintName("FK__Projects__UserId__4D94879B");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Pass)
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("pass");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
