/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19  Distrib 10.11.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: sikerma
-- ------------------------------------------------------
-- Server version	10.11.11-MariaDB-ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache_locks`
--

LOCK TABLES `cache_locks` WRITE;
/*!40000 ALTER TABLE `cache_locks` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache_locks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES
(1,'Panduan Aplikasi SIKERMA 2.0','documents/8Rwi4eLUkO7EoC1yoA477PcR1qE8gKu9j5YqhZmi.pdf','2025-04-16 15:55:01','2025-04-16 15:55:01'),
(11,'Format Laporan Akhir','documents/ztqvO1V5YMnExbmRERodxjewqv65BUVphKGoMfj9.pdf','2025-05-21 13:55:18','2025-05-21 13:55:18'),
(16,'MoU Antara RMIT University dengan Universitas Palangka Raya Prodi Agroteknologi','documents/7SuMXKmIzJV8IXFpZ59O2zbloB8SnW8JH0Sr6EfA.pdf','2025-07-22 04:04:30','2025-07-22 04:04:30'),
(17,'Laporan Pelaksanaan Kerjasama Dengan RMIT dan ACIAR','documents/ElgrOtCo5kC2j8ca81Stv5crhZwD51K95h8STl93.pdf','2025-07-22 04:06:46','2025-07-22 04:06:46');
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faculties`
--

DROP TABLE IF EXISTS `faculties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `faculties` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faculties`
--

LOCK TABLES `faculties` WRITE;
/*!40000 ALTER TABLE `faculties` DISABLE KEYS */;
INSERT INTO `faculties` VALUES
(1,'FAKULTAS TEKNIK','Teknik','2025-04-15 17:48:26','2025-04-15 17:48:26'),
(2,'FAKULTAS HUKUM','Hukum','2025-04-15 17:48:26','2025-04-15 17:48:26'),
(3,'FAKULTAS KEGURUAN DAN ILMU PENDIDIKAN','FKIP','2025-04-15 17:48:26','2025-04-15 17:48:26'),
(4,'FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM','FMIPA','2025-04-15 17:48:26','2025-04-15 17:48:26'),
(5,'FAKULTAS EKONOMI DAN PEMBANGUNAN','fakultas-ekonomi-dan-pembangunan','2025-04-15 17:48:26','2025-05-20 10:03:15'),
(6,'FAKULTAS PERTANIAN','Pertanian','2025-04-15 17:48:26','2025-04-15 17:48:26'),
(7,'FAKULTAS ILMU SOSIAL DAN POLITIK','FISIP','2025-04-15 17:48:26','2025-04-15 17:48:26'),
(8,'FAKULTAS KEDOKTERAN','Kedokteran','2025-04-15 17:48:26','2025-04-15 17:48:26'),
(9,'PROGRAM PASCA SARJANA','Pascasarjana','2025-04-15 17:48:26','2025-04-15 17:48:26');
/*!40000 ALTER TABLE `faculties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `field_activities`
--

DROP TABLE IF EXISTS `field_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `field_activities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `field_activities`
--

LOCK TABLES `field_activities` WRITE;
/*!40000 ALTER TABLE `field_activities` DISABLE KEYS */;
INSERT INTO `field_activities` VALUES
(1,'asistensi-mengajar-di-satuan-pendidikan-kampus-merdeka','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(2,'gelar-bersama-joint-degree','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(3,'gelar-ganda-dual-degree','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(4,'kegiatan-wirausaha-kampus-merdeka','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(5,'magang-praktik-kerja-kampus-merdeka','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(6,'membangun-desa-kkn-tematik-kampus-merdeka','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(7,'pelatihan','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(8,'pelatihan-dosen-dan-instruktur','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(9,'pemagangan','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(10,'penelitian-bersama','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(11,'penelitian-bersama-artikel-jurnal-ilmiah','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(12,'penelitian-bersama-paten','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(13,'penelitian-bersama-prototipe','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(14,'penelitian-riset-kampus-merdeka','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(15,'penerbitan-berkala-ilmiah','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(16,'pengabdian-kepada-masyarakat','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(17,'pengembangan-kurikulum-program-bersama','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(18,'pengembangan-pusat-penelitian-dan-pengembangan-keilmuan','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(19,'pengembangan-sistem-produk','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(20,'pengiriman-praktisi-sebagai-dosen','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(21,'penyaluran-lulusan','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(22,'penyelenggaraan-seminar-konferensi-ilmiah','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(23,'pertukaran-dosen','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(24,'pertukaran-mahasiswa','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(25,'pertukaran-pelajar-kampus-merdeka','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(26,'proyek-kemanusiaan-kampus-merdeka','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(27,'studi-proyek-independen-kampus-merdeka','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(28,'transfer-kredit','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(29,'visiting-professor','2025-04-15 17:48:45','2025-04-15 17:48:45');
/*!40000 ALTER TABLE `field_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `institutes`
--

DROP TABLE IF EXISTS `institutes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `institutes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `institutes`
--

LOCK TABLES `institutes` WRITE;
/*!40000 ALTER TABLE `institutes` DISABLE KEYS */;
INSERT INTO `institutes` VALUES
(1,'Universitas Palangka Raya','2025-04-15 17:48:45','2025-04-15 17:48:45'),
(4,'LEMBAGA PENGEMBANGAN PEMBELAJARAN DAN PENJAMINAN MUTU PENDIDIKAN (LP3MP)','2025-05-20 19:09:59','2025-05-20 19:09:59'),
(5,'LEMBAGA PENELITIAN DAN PENGABDIAN KEPADA MASYARAKAT UNIVERSITAS PALANGKA RAYA (LPPM)','2025-06-04 07:01:58','2025-06-04 07:02:13');
/*!40000 ALTER TABLE `institutes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_batches`
--

LOCK TABLES `job_batches` WRITE;
/*!40000 ALTER TABLE `job_batches` DISABLE KEYS */;
/*!40000 ALTER TABLE `job_batches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES
(1,'0001_01_01_000000_create_users_table',1),
(2,'0001_01_01_000001_create_cache_table',1),
(3,'0001_01_01_000002_create_jobs_table',1),
(4,'2024_02_04_075834_create_institutes_table',1),
(5,'2024_02_04_075834_create_upts_table',1),
(6,'2024_12_19_145035_create_faculties_table',1),
(7,'2024_12_19_145102_create_study_programs_table',1),
(8,'2024_12_19_145409_add_role_on_user_table',1),
(9,'2024_12_19_150231_create_partnerships_table',1),
(10,'2024_12_19_151302_create_partners_table',1),
(11,'2024_12_19_151833_create_field_activities_table',1),
(12,'2024_12_19_151833_create_partnership_activities_table',1),
(13,'2025_01_23_075557_add_document_fundamental_to_partnership_table',1),
(14,'2025_03_19_220901_add_final_document_to_partnerships',1),
(15,'2025_03_21_220949_create_documents_table',1),
(16,'2025_04_10_001752_create_partner_criterias_table',1),
(17,'2025_04_10_002805_add_partner_criteria',1),
(18,'2025_04_10_115114_add_weight_study_program',1),
(19,'2025_04_10_115742_alter_parnter_criteria_foreign',1),
(20,'2025_08_05_011107_alter_title_to_text_in_partnerships_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_criterias`
--

DROP TABLE IF EXISTS `partner_criterias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `partner_criterias` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `weight` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_criterias`
--

LOCK TABLES `partner_criterias` WRITE;
/*!40000 ALTER TABLE `partner_criterias` DISABLE KEYS */;
INSERT INTO `partner_criterias` VALUES
(1,'Perusahaan Teknologi Global',1,NULL,'2025-05-06 03:16:36'),
(2,'Institusi / organisasi multilateral',1,NULL,NULL),
(3,'Perguruan tinggi luar negeri masuk QS200 (by subject)',1,NULL,NULL),
(4,'Organisasi nirlaba kelas dunia',0.75,NULL,NULL),
(5,'Perusahaan multinasional',0.75,NULL,NULL),
(6,'Perguruan tinggi dalam negeri masuk QS200 (by subject)',0.5,NULL,NULL),
(7,'Perusahaan nasional berstandar tinggi, BUMN, BUMD',0.5,NULL,NULL),
(8,'Perusahaan rintisan (startup) teknologi (2–5 tahun berdiri, NIB aktif)',0.5,NULL,NULL),
(9,'Instansi pemerintah (pusat/daerah)',0.3,NULL,NULL),
(10,'Rumah sakit kelas A–D',0.3,NULL,NULL),
(11,'Lembaga riset (pemerintah/swasta/nasional/internasional)',0.3,NULL,NULL),
(12,'Lembaga kebudayaan berskala nasional / bereputasi',0.3,NULL,NULL);
/*!40000 ALTER TABLE `partner_criterias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `partners` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `partnership_id` bigint(20) unsigned NOT NULL,
  `agency_type` enum('perguruan','mitra') NOT NULL DEFAULT 'perguruan',
  `agency_name` text NOT NULL,
  `agency_address` text NOT NULL,
  `signatory_name` text NOT NULL,
  `signatory_position` text NOT NULL,
  `responsible_name` text DEFAULT NULL,
  `responsible_position` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partners_partnership_id_foreign` (`partnership_id`),
  CONSTRAINT `partners_partnership_id_foreign` FOREIGN KEY (`partnership_id`) REFERENCES `partnerships` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=391 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES
(375,31,'perguruan','Universitas Palangka Raya','Jalan Yos Sudarso, Kampus Universitas Palangka Raya','Prof. Dr. Ir. Salampak, MS','Rektor Universitas Palangka Raya',NULL,NULL,'2025-08-14 08:51:43','2025-08-14 08:51:43'),
(376,31,'mitra','DIREKTORAT JENDERAL PAJAK KEMENTERIAN KEUANGAN REPUBLIK INDONESIA','lan Lambung Mangkurat Nomor 21, Kelurahan Kertak Baru llir, Kecamatan Banjarmasin Tengah, Kota Banjarmasin, Provinsi Kalimantan Selatan','Syamsinar, S.P., M.Comm','Kepala Kantor Wilayah Direktorat Jenderal Pajak Kalimantan Selatan dan Tengah',NULL,NULL,'2025-08-14 08:51:43','2025-08-15 05:52:47');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partnership_activities`
--

DROP TABLE IF EXISTS `partnership_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `partnership_activities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `partnership_id` bigint(20) unsigned NOT NULL,
  `field_activity_id` bigint(20) unsigned NOT NULL,
  `document_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partnership_activities_partnership_id_foreign` (`partnership_id`),
  KEY `partnership_activities_field_activity_id_foreign` (`field_activity_id`),
  CONSTRAINT `partnership_activities_field_activity_id_foreign` FOREIGN KEY (`field_activity_id`) REFERENCES `field_activities` (`id`) ON DELETE CASCADE,
  CONSTRAINT `partnership_activities_partnership_id_foreign` FOREIGN KEY (`partnership_id`) REFERENCES `partnerships` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=233 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partnership_activities`
--

LOCK TABLES `partnership_activities` WRITE;
/*!40000 ALTER TABLE `partnership_activities` DISABLE KEYS */;
INSERT INTO `partnership_activities` VALUES
(227,114,7,NULL,'2025-08-12 09:53:08','2025-08-12 09:53:08'),
(228,122,16,NULL,'2025-08-15 02:15:22','2025-08-15 02:15:22'),
(229,122,19,NULL,'2025-08-15 02:15:22','2025-08-15 02:15:22'),
(230,123,18,NULL,'2025-08-15 02:27:44','2025-08-15 02:27:44'),
(231,123,14,NULL,'2025-08-15 02:27:44','2025-08-15 02:27:44'),
(232,123,16,NULL,'2025-08-15 02:27:44','2025-08-15 02:27:44');
/*!40000 ALTER TABLE `partnership_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partnerships`
--

DROP TABLE IF EXISTS `partnerships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `partnerships` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` enum('Memorandum of Understanding','Memorandum of Agreement','Implementation Agreement') NOT NULL,
  `document_number` varchar(255) NOT NULL,
  `title` text NOT NULL,
  `description` text DEFAULT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `status` enum('active','dalam-perpanjangan','expired','non-aktif') NOT NULL DEFAULT 'active',
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `executor` varchar(255) DEFAULT NULL,
  `institute_id` bigint(20) unsigned DEFAULT NULL,
  `upt_id` bigint(20) unsigned DEFAULT NULL,
  `faculty_id` bigint(20) unsigned DEFAULT NULL,
  `study_program_id` bigint(20) unsigned DEFAULT NULL,
  `document_path` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `document_fundamental` varchar(255) DEFAULT NULL,
  `final_document_path` varchar(255) DEFAULT NULL,
  `partner_criteria_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `partnerships_user_id_foreign` (`user_id`),
  KEY `partnerships_institute_id_foreign` (`institute_id`),
  KEY `partnerships_upt_id_foreign` (`upt_id`),
  KEY `partnerships_faculty_id_foreign` (`faculty_id`),
  KEY `partnerships_study_program_id_foreign` (`study_program_id`),
  KEY `partnerships_partner_criteria_id_foreign` (`partner_criteria_id`),
  CONSTRAINT `partnerships_faculty_id_foreign` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE SET NULL,
  CONSTRAINT `partnerships_institute_id_foreign` FOREIGN KEY (`institute_id`) REFERENCES `institutes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `partnerships_partner_criteria_id_foreign` FOREIGN KEY (`partner_criteria_id`) REFERENCES `partner_criterias` (`id`) ON DELETE SET NULL,
  CONSTRAINT `partnerships_study_program_id_foreign` FOREIGN KEY (`study_program_id`) REFERENCES `study_programs` (`id`) ON DELETE SET NULL,
  CONSTRAINT `partnerships_upt_id_foreign` FOREIGN KEY (`upt_id`) REFERENCES `upts` (`id`) ON DELETE SET NULL,
  CONSTRAINT `partnerships_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partnerships`
--

LOCK TABLES `partnerships` WRITE;
/*!40000 ALTER TABLE `partnerships` DISABLE KEYS */;
INSERT INTO `partnerships` VALUES
(31,'Memorandum of Understanding','60/UN24/KS/2025','MoU UPR & Kantor Wilayah Direktorat Jenderal Pajak Kalimantan Selatan dan Tengah 2025','<p>Peningkatan Mutu Penyelenggaraan Tridharma Perguruan Tinggi</p>',1,'active','2024-12-28','2027-12-29',NULL,NULL,NULL,NULL,NULL,'partnership_documents/RA1YQumczOrKZ3FIKheBuZi7hsZI4DABl0qJBQb6.pdf','2025-05-21 06:56:12','2025-08-15 06:03:11',NULL,NULL,NULL),
(32,'Memorandum of Understanding','2010/UN24/KS/2025','MoU LKP Dayak Mandiri & UPR 2025','<p>Pelaksanaan Tri Dharma Perguruan Tinggi</p>',1,'active','2025-02-25','2026-02-25',NULL,NULL,NULL,NULL,NULL,'partnership_documents/8rE2pfA5uyyp3CtcNM1V334nW1if5xake3qjYHPP.pdf','2025-05-21 07:13:17','2025-08-14 06:51:24',NULL,NULL,NULL),
(33,'Memorandum of Understanding','2327/UN24/KS/2025','Nota Kesepahaman antara Universitas Palangka Raya dengan APINDO Prov Kalteng 2025','<p>Peningkatan Mutu Penyelenggaraan Tridarma Perguruan Tinggi</p>',1,'active','2025-03-20','2028-03-20',NULL,NULL,NULL,NULL,NULL,'partnership_documents/QRSnuMyhEHpv9u2fiPTgXKgKSMCcPCBRl9lru47R.pdf','2025-05-21 07:24:14','2025-08-14 06:54:56',NULL,NULL,NULL),
(34,'Memorandum of Understanding','1831/UN24/KS/2025','MoU UPR & PT Industrial Forest Plantation_2025','<p>Kerjasama Kemitraan Pendidikan, Penelitian, Pengabdian kepada Masyrakat dan Peningkatan Kualitas Sumber Daya Manusia.</p>',1,'active','2025-02-23','2030-02-23',NULL,NULL,NULL,NULL,NULL,'partnership_documents/vR97UTOJMJzWSVessebC8WR9JcBHNLtiO34gdhuv.pdf','2025-05-21 07:33:16','2025-08-14 08:56:06',NULL,NULL,NULL),
(38,'Memorandum of Understanding','2327/UN24/KS/2024','MoU UPR & APINDO KALTENG 2024','<p>Peningkatan Mutu Penyelenggaraan Tridarma Perguruan Tinggi</p>',1,'active','2025-03-20','2028-03-20',NULL,NULL,NULL,NULL,NULL,'partnership_documents/Ez3A8avvv698XOmPQY43numG5ovUdt9Madu0galP.pdf','2025-05-22 02:37:04','2025-08-14 09:02:00',NULL,NULL,NULL),
(39,'Memorandum of Agreement','415/UN24.3/LP.00.01/2025','PKS FKIP UPR & APINDO KALTENG','<p>Penyelenggaraan Pendidikan, Penelitian, dan Pengabdian kepada Masyarakat dalam rangka Pelaksanaan Tridharma Perguruan Tinggi dan Program Merdeka Belajar Kampus Merdeka (MBKM)</p>',1,'active','2025-03-07','2028-03-07',NULL,NULL,NULL,NULL,NULL,'partnership_documents/7cXmHdtPSvYUIrxVA6qeuDCvslffsABYGLPzT7Hn.pdf','2025-05-22 03:21:18','2025-08-09 08:01:20','2327/UN24/KS/2024',NULL,NULL),
(40,'Memorandum of Agreement','0460/UN24.5/AK.00.07/2025 dan 001/PKS/Y-PAL/II/2025','Pengembangan Kapasitas Sumber Daya dan Kemitraan di Lingkungan Jurusan/Program Studi Di Fakultas Pertanian Universitas Palangka Raya','<p>PKS ini merupakan upaya Fakultas Pertanian UPR dan Yayasan Pandu Alam Lestari (PAL) dalam Melakukan kemitraan yang berorientasi pada Pengembangan Kapasitas Sumber Daya dan Kemitraan di Lingkungan Jurusan/Program Studi Di Fakultas Pertanian Universitas Palangka Raya.</p>',1,'active','2025-02-02','2028-02-02',NULL,NULL,NULL,NULL,NULL,'partnership_documents/wO7lciJOHXhfF1xDHPtY24nKInuwxHYTOoUvqgrs.pdf','2025-06-12 04:36:23','2025-08-09 08:25:09',NULL,NULL,NULL),
(41,'Memorandum of Agreement','660/36/DPUPR-TRBK/2025 dan 1467/UN24.5/KS/2025','Penyusunan Kajian Lingkungan Hidup Strategis Rencana Detail Tata Ruang dan Peraturan Zonasi BWP Kota Tumbang Samba Kabupaten Katingan Tahun 2025','<p>Kerjasama ini merupakan kemitraan dalam hal Penyusunan Kajian Lingkungan Hidup Strategis Rencana Detail Tata Ruang dan Peraturan Zonasi BWP Kota Tumbang Samba Kabupaten Katingan Tahun 2025. Fakultas Pertanian sebagai mitra dalam menyediakan tenaga ahli dalam penyusunan dokumen Kajian Lingkungan Hidup Strategis Rencana Detail Tata Ruang dan Peraturan Zonasi BWP Kota Tumbang Samba Kabupaten Katingan Tahun 2025.</p>',1,'active','2025-02-17','2025-08-15',NULL,NULL,NULL,NULL,NULL,'partnership_documents/ynrlKc16sDhse4U9XjO0UJREY3SRgP29UPPI8x8M.pdf','2025-06-12 04:57:08','2025-08-09 08:32:37',NULL,NULL,NULL),
(42,'Memorandum of Agreement','448/MoU/Satker-08/IV/2025 dan 2113/UN24.5/KS/2025','Swakelola Tipe II Pada Paket Pekerjaan Kegiatan Survei Investigasi dan Desain Optimasi Lahan Rawa Di Kabupaten Pulang Pisau Provinsi Kalimantan Tengah','<p>Kerjasama ini merukapakan Swakelola Tipe II Pada Paket Pekerjaan Kegiatan Survei Investigasi dan Desain Optimasi Lahan Rawa Di Kabupaten Pulang Pisau Provinsi Kalimantan Tengah, dimana Fakultas Pertanian UPR Sebagai mitra yang berkontribusi pada penyediaan tenaga ahli dalam melaksanakan pekerjaan tersebut.</p>',1,'active','2025-04-13','2026-04-13',NULL,NULL,NULL,NULL,NULL,'partnership_documents/toySaaKJk9bTnPHeTaCgjHYH3k1UXtsB3QDqbJ5d.pdf','2025-06-12 06:06:50','2025-08-09 08:39:38',NULL,NULL,NULL),
(43,'Implementation Agreement','104/UN24.18/KS/2024','Pendampingan Pelaksanaan Kegiatan Gerakan Peduli dan Berbudaya Lingkungan Sekolah (GPBLH) Sekolah Adiwiyata  dan Kegiatan Kokurikuler P5 (Proyek Penguatan Profil Pelajar Pancasila) dengan Tema Gaya Hidup Berkelanjutan','<p>Kegiatan Kerjasama ini mencakup :</p><ol><li>Penanaman dan pemelihaaraan tanaman di UPT. Laboratorium Alam di Hutan Pendidikan Hampangen seluas -+ 1 Hektar serta Pelatihan Pengamatan Hutan Pendidikan HampangenUniversitas Palangka Raya.</li><li>Pendidikan Lingkungan yang diselenggarakan oleh UPT. Laboratorium Alam di Hutan Pendidikan Hampangen Universitas Palangka Raya.</li></ol>',1,'active','2024-10-22','2026-12-17',NULL,NULL,NULL,NULL,NULL,'partnership_documents/0wap4WxfJd4MmmYATlr29p7OqcoiPkP0S8c6Ayud.pdf','2025-06-16 07:53:34','2025-08-09 08:45:06',NULL,NULL,NULL),
(44,'Memorandum of Agreement','0109/UN24.7/KS/2025','PERJANJIAN KERJASAMA ANTARA FAKULTAS HUKUM UNIVERSITAS PALANGKA RAYA DENGAN KEMENTERIAN AGRARIA DANA TATA RUANG/ BADAN PERTANAHAN NASIONAL KANTOR PERTANAHAN KABUPATEN GUNUNG MAS','<p>PERJANJIAN KERJASAMA ANTARA FAKULTAS HUKUM UNIVERSITAS PALANGKA RAYA DENGAN KEMENTERIAN AGRARIA DANA TATA RUANG/ BADAN PERTANAHAN NASIONAL KANTOR PERTANAHAN KABUPATEN GUNUNG MAS TENTANG KERJASAMA DALAM PEMBUATAN BUKU SAKU DAN VIDEO EDUKASI TENTANG TATA CARA PENERBITAN SERTIFIKAT HAK MILIK ATAS TANAH DI KABUPATEN GUNUNG MAS</p><p>Kerjasama Fakultas Hukum Universitas Palangka Raya dengan Kementerian Agraria dan Tata Ruang/ Badan Pertanahan Nasional Kantor Pertanahan Kabupaten Gunung Mas dalam hal pembuatan buku saku dan video edukasi tentang tata cara penerbitan sertifikat hak milik atas tanah di kabupaten Gunung Mas dengan nomor PKS 0109/UN24.7/KS/2025</p>',1,'active','2025-01-22','2028-01-22',NULL,NULL,NULL,NULL,NULL,'partnership_documents/Jx7wzqD64GcPmqqJwDvG59vMFkL5cdwRpBGRfj13.pdf','2025-06-17 03:27:14','2025-08-09 08:49:01',NULL,'partnership_final_documents/AsiJS2nsTsJ8ek0UKg29AZdfd182bbhSgNxnMQ7n.pdf',NULL),
(45,'Memorandum of Understanding','0711/UN24.7/KS/2025','PERJANJIAN KERJASAMA ANTARA FAKULTAS HUKUM UNIVERSITAS PALANGKA RAYA DENGAN BANK MANDIRI KANTOR CABANG PEMBANTU PASAR KAHAYAN','<p>PERJANJIAN KERJASAMA ANTARA FAKULTAS HUKUM UNIVERSITAS PALANGKA RAYA DENGAN BANK MANDIRI KCP PASAR KAHAYAN KOTA PALANGKA RAYA KALIMANTAN TENGAH TENTANG PENYELENGGARAAN KERJASAMA TRI DHARMA PERGURUAN TINGGI DI BIDANG PENDIDIKAN, PENELITIAN, PENGABDIAN KEPADA MASYARAKAT DAN PROGRAM MERDEKA BELAJAR KAMPUS MERDEKA</p><p>kerjasama antara fakultas hukum universitas palangka raya dengan bank mandiri kantor cabang pembantu pasar kahayan kota palangkaraya dalam program tri dharma perguruan tinggi dibidang pendidikan, penelitian, pengabdian kepada masyarakat dan program merdeka belajar kampus merdeka, dengan nomor PKS 0711/UN24.7/KS/2025</p>',1,'active','2025-05-02','2028-05-02',NULL,NULL,NULL,NULL,NULL,'partnership_documents/ILP1JdBGJw0kyprCNN32lCAKNHTHYfpCq1grNUZD.pdf','2025-06-17 03:50:34','2025-08-10 08:45:48',NULL,NULL,NULL),
(46,'Memorandum of Agreement','0651/UN24.7/KS/2025','PENYELENGGARAAN KERJASAMA TRI DHARMA PERGURUAN TINGGI DI BIDANG PENDIDIKAN, PENELITIAN, PENGABDIAN MASYARAKAT DAN PROGRAM MERDEKA BELAJAR KAMPUS MERDEKA','<p>Perjanjian Kerjasama antara Fakultas Hukum Universitas Palangka Raya dan Polresta Palangka Raya tentang penyelenggaraan kerjasama tri dharma perguruan tinggi di bidang pendidikan, penelitian, pengabdian masyarakat dan program merdeka belajar kampus merdeka dengan nomor PKS 0651/UN24.7/KS/2025</p>',1,'active','2025-03-05','2028-03-05',NULL,NULL,NULL,NULL,NULL,'partnership_documents/wGmNdbcA7mjDG7EQ8YqZnfTnYP2QzV2Y9AB3R5SE.pdf','2025-06-17 04:01:44','2025-08-10 08:54:00',NULL,NULL,NULL),
(47,'Memorandum of Agreement','0351/UN24.7/KS/2025','PENYELENGGARA KERJA SAMA TRI DHARMA PERGURUAN TINGGI DI BIDANG PENDIDIKAN, PENELITIAN, PENGABDIAN KEPADA MASYAKARAT DAN PROGRAM MERDEKA BELAJAR KAMPUS MERDEKA','<p>Perjanjian Kerja Sama antara Fakultas Hukum Universitas Palangka Raya dan Dinas Pendidikan Kota Palangka Raya tentang penyelenggara Kerja Sama Tri Dharma Perguruan Tinggi di Bidang Pendidikan, Penelitian, Pengabdian Kepada Masyarakat dan Program Merdeka Belajar Kampus Merdeka. dengan nomor PKS 0351/UN24.7/KS/2025</p>',1,'active','2025-05-08','2028-05-08',NULL,NULL,NULL,NULL,NULL,'partnership_documents/4kUHlsJBQwKT5zQ4rH3JhVri6tukanrqJuQwWnIh.pdf','2025-06-17 04:10:15','2025-08-10 08:58:29',NULL,'partnership_final_documents/20Ig90aSveCmW9tC9Y00DFYafTYdtMH8Fe8jvWTq.pdf',NULL),
(48,'Implementation Agreement','-','SOSIALISASI DAN EVOKASI TERKAIT UNDANG - UNDANG NO 13 TAHUN 2003 TENTANG KETENAGAKERJAAN DALAM MENCEGAH PEKERJA ANAK DIBAWAH UMUR DI PERUSAHAAN PT KAHAYAN BERSERI','<p>Proyek Kolaboratif yang dilakukan adalah Kegiatan Sosialisasi dan Evokasi terkait Undang - Undang Nomor 13 Tahun 2003 tentang Ketenagakerjaan di PT Kahayan Berseri dapat meliputi penyuluhan kepada karyawan mengenai pentingnya mencegah pekerja anak di bawah umur, serta meningkatkan kesadaran akan hak - hak anak dan dampak negatif dari pekerja anak. Kegiatan ini dilakukan melalui kerja sama Dinas Tenaga Kerja dan Transmigrasi Provinsi Kalimantan Tengah, yang secara aktif memberikan penyuluhan tentang peraturan ketenagakerjaan.</p>',1,'active','2025-02-19','2025-02-19',NULL,NULL,NULL,NULL,NULL,'partnership_documents/jTdfpFU01ceinWhrGUEohvJGFea8zMC4jV1RbQWS.pdf','2025-06-17 04:21:39','2025-08-10 09:16:49',NULL,NULL,NULL),
(49,'Implementation Agreement','-','PENYULUHAN HUKUM TENTANG PP NO. 36 TAHUN 2021','<p>Kegiatan Sosialisasi mengenai pengupahan yang telah diselenggarakan di PT Kahayan Berseri pada tanggal 12 April 2025, dalam kegiatan ini kami menjelaskan Peraturan Pemerintah Nomor 36 Tahun 2021 tentang Pengupahan, yang mencakup hak - hak pekerja atas upah serta kewajiban pengusaha dalam memberikan upah. Materi yang disampaikan meliputi Upah Minimum, Upah Lembur, berbagai jenis tunjangan dan Komponen Upah.</p>',1,'active','2025-04-09','2025-04-09',NULL,NULL,NULL,NULL,NULL,'partnership_documents/nyeGVbbwCYQrxSbE6NT2rW4y3CYoIvk72V5T7RKH.pdf','2025-06-17 04:28:34','2025-08-10 11:29:07',NULL,NULL,NULL),
(50,'Memorandum of Agreement','391/UN24.4/KS/2025','Kesepakatan Kerjasama (Memorandum of Agreement)','<p>Kesepakatan Kerjasama (MoA) Antara Fakultas Ekonomi dan Bisnis Universitas Palangkaraya dangan Fakultas Ekonomi dan&nbsp;Bisnis Universitas Kristen Palangkaraya (UKPR) tentang Pendidikan, Penelitian dan Pengabdian Kepada Masyarakat</p>',1,'active','2025-03-01','2028-03-01',NULL,NULL,NULL,NULL,NULL,'partnership_documents/6dv394antCtlugXa27PaXxmE7OUrHfSWr3tZZOLf.pdf','2025-06-18 08:03:33','2025-08-10 11:38:55',NULL,NULL,NULL),
(51,'Memorandum of Agreement','3353/UN24.4/KS/2025','Memorandum of Agreement Between Faculty Of Economics And Business And School Of Chemistry University Of Leeds','<p>Memorandum of Agreement Between Faculty Of Economics And Business And School Of Chemistry University Of Leeds on Research Sharing And Scientific Discussion \"The Air Quality Impact On Economy And Community Health\".</p>',1,'active','2025-06-07','2026-06-07',NULL,NULL,NULL,NULL,NULL,'partnership_documents/S4qUdvHbP5IN0whdHFg5UyDHCYIYem2NwW0ooRAo.pdf','2025-06-18 08:49:34','2025-08-10 11:42:19',NULL,'partnership_final_documents/l330iiRgzLL1BylwSSL2XUsOhmRnjHpJmcJU2AzN.pdf',NULL),
(53,'Memorandum of Agreement','2751/UN24.5/LP.00.01/2025 dan 522/1397/I.3/DISHUT','Pendidikan, Penelitian, Pengabdian Masayarakat dan Pengembangan Sumber Daya Manusia','<p>Perjanjian Kerjasama Fakultas Pertanian dan Dinas Kehutanan Provinsi Kalimantan Tengah di Bidang Pendidikan, Penelitian, Pengabdian Masayarakat dan Pengembangan Sumber Daya Manusia</p>',1,'active','2025-05-30','2028-05-30',NULL,NULL,NULL,NULL,NULL,'partnership_documents/tBzga7sXedUtBgR3qg26VZ56hjGO5h0qYN0MLOOn.pdf','2025-06-24 02:08:46','2025-08-10 11:48:14',NULL,NULL,NULL),
(54,'Memorandum of Agreement','660/549/DLH/II.1/V/2025 dan 2646/UN24.5/KS/2025','Kerjasama Pengelolaan Bank Sampah Unit Di Fakultas Pertanian Universitas Palangka Raya','<p>Kerjasama Pengelolaan Bank Sampah Unit Di Fakultas Pertanian Universitas Palangka Raya. Fakultas Pertanian Bertindak sebagai Mitra yang menyediakan dan mengelola unit pengelolaan bank sampah</p>',1,'active','2025-05-17','2029-05-17',NULL,NULL,NULL,NULL,NULL,'partnership_documents/Vh0reTtMTS18sidWfvLwOXt4NIXDvl0eNCEFLfHC.pdf','2025-06-24 02:28:55','2025-08-10 11:53:43',NULL,NULL,NULL),
(58,'Memorandum of Agreement','57/UN24.6/KS/2024','KERJASAMA ANTARA PT CIPTA MANDALA INDONESIA DAN JURUSAN TEKNIK PERTAMBANGAN TENTANG KERJASAMA PELATIHAN BIDANG PERTAMBANGAN DAN K3','<p>Ruang Lingkup Kerjasama:</p><ol><li>Pengadaan pelatihan kompetisi oleh pihak pertama kepada pihak kedua</li><li>Pelaksanaan pelatihan untuk mahasiswa dan alumni yang diselenggarakan bersama oleh pihak pertama dan pihak kedua</li><li>Penggunaan sumber daya manusia (SDM) pihak pertama dan pihak kedua untuk kegiatan dalam bidang pendidikan pelatihan dan sertifikasi</li></ol>',1,'active','2025-01-23','2027-01-23',NULL,NULL,NULL,NULL,3,'partnership_documents/qEKrfpAczJXmtFPd6bg90we38fjYefLOaB70ATlF.pdf','2025-07-09 06:39:12','2025-08-10 12:00:05',NULL,NULL,NULL),
(59,'Memorandum of Agreement','234a/UN24.6/KS/2024','PKS JURUSAN/PRODI TEKNIK PERTAMBANGAN FT UPR DENGAN SMKN 5 TENTANG PENYELENGGARAAN PROGRAM PENGEMBANGAN KEGIATAN TRIDHARMA PERGURUAN TINGGI','<p>Ruang lingkup perjanjian:</p><ol><li>Pengembangan di bidang pendidikan dalam rangka meningkatkan kualitas lulusan melalui pengambangan kurikulum, pembimbingan, pengajaran, pemagangan, seminar, workshop, pendidikan dan pelatihan/training, pemanfaatan fasilitas laboratorium/perpustakaan atau kegiatan lain yang relevan</li><li>Pengembangan bidang penelitian dan PKM, dst</li></ol>',1,'active','2024-07-20','2028-07-20',NULL,NULL,NULL,NULL,3,'partnership_documents/ROIvm62HosLPycADAjcFxUW264VXysPQWy09B6TO.pdf','2025-07-09 07:24:37','2025-08-10 12:08:16',NULL,NULL,NULL),
(60,'Memorandum of Agreement','722/UN24.6/KS/2024','JURUSAN/PRODI TEKNIK PERTAMBANGAN FT UPR DENGAN PRODI TEKNIK PERTAMBANGAN FAKULTAS SAINS DAN TEKNIS UBB TENTANG PENYELENGGARAANPROGRAM PENGEMBANGAN KEGIATAN TRIDHARMA PERGURUAN TINGGI','<p>Ruang Lingkup  Kerjasama :</p><ol><li>Pengembangan di bidang pendidikan </li><li>Pengembangan di bidang penelitian dan PKM</li><li>Peningkatan tata kelola penyelenggaraan pendidikan tinggi melalui peningkatan sumberdaya manusia dosen dan tenaga kependidikan</li></ol><p><br></p>',14,'active','2024-11-27','2028-11-27',NULL,NULL,NULL,NULL,3,'partnership_documents/1EWvNXahu6a7hIbOCAxvRD19A3JTpQdAGzbyyCa1.pdf','2025-07-09 07:33:46','2025-07-09 07:33:46',NULL,NULL,NULL),
(63,'Implementation Agreement','40/UN24.5.4B/KS/2025','Magang MBKM Mandiri Program Studi Budidaya Perairan Fakultas Pertanian UPR','<p>Kegiatan Magang/ Praktik Kerja-Kampus Merdeka</p>',47,'active','2025-02-14','2025-06-14',NULL,NULL,NULL,NULL,36,'partnership_documents/Y4oo4LQYDOcKA3RcbFOneBEIpnSxRG42n0iL2osl.pdf','2025-07-18 09:19:40','2025-07-18 09:19:40',NULL,'partnership_final_documents/rnZKe5glfLC0oAonDaPrZnXkwYZzd6HCzFviWJmA.pdf',NULL),
(64,'Memorandum of Agreement','0347/UN24.7/KS/2025','Kerjasama antara FH Universitas Palangka Raya dan  Pemerintah Desa Bahu Palawa Kecamatan Kahayan Tengah Kabupaten Pulang Pisau, melalui Proyek Kolaboratif Mahasiswa terkait Penyusunan Naskah Akademik dan Rancangan Peraturan Desa terkait Desa Wisata','<p>Kerjasama antara FH Universitas Palangka Raya dan&nbsp;Pemerintah Desa Bahu Palawa Kecamatan Kahayan Tengah Kabupaten Pulang Pisau, melalui Proyek Kolaboratif Mahasiswa terkait Penyusunan Naskah Akademik dan Rancangan Peraturan Desa terkait Desa Wista berdasarkan Perjanjian Kerja Sama (PKS) Perjanjian Kerja Sama Nomor: 0347/UN24.7/KS/2025 dan Nomor: 08/PD-BP/PKA/II/2025 pada tanggal 24 Februari 2025.</p>',4,'active','2025-02-21','2025-02-21',NULL,NULL,NULL,NULL,NULL,'partnership_documents/dqzCWulsBbduYI6ZGxU6D7GNpeWkej1XlKlvYiUY.pdf','2025-07-18 09:58:01','2025-08-15 05:51:51',NULL,'partnership_final_documents/orvc6EA3HdfXyxUUFMwlJIADXdmhwRj43ZK9dsCL.pdf',NULL),
(65,'Memorandum of Agreement','3231/UN14.5/KS/2025 dan 4385/UN1/KT/TU/HK.08.00/2025','Kerja Sama Kegiatan Tri Dharma Perguruan Tinggi','<p>Perjanjian  Kerja Sama antara Fakultas Pertanian Universitas Palangka Raya dan Fakultas Kehutanan Universitas Gadjah Mada dalam bidang Pendidikan, Penelitian dan Pengabdian kepada Masyarakat serta kegiatan lainnya sesuai dengan tugas dan fungsi masing-masing </p>',97,'active','2025-06-17','2030-06-17',NULL,NULL,NULL,6,NULL,'partnership_documents/qpCNe30Ihi2a2WUvkG5peLo8aUfvJ0MmcB3wFbzI.pdf','2025-07-21 01:42:47','2025-07-24 03:19:24',NULL,NULL,NULL),
(66,'Implementation Agreement','2432/UN.24.5/KS/2024','Resource Sharing sarana dan prasarana laboratorium','<p>tujuan kegiatan menyediakan sarana dan prasarana laboratorium dalam analisa sampel penelitian mahasiswa prodi teknologi hasil perikanan dalam kegiatan belajar yang berbentuk pengamatan terhadap percobaan atau pengujian di laboratorium</p>',1,'active','2025-04-18','2025-04-18',NULL,NULL,NULL,NULL,33,'partnership_documents/MeACgPo0NKuN5WpyA9RkWDofCwVOTGPXF0aD5vp0.pdf','2025-07-21 02:58:06','2025-07-23 07:45:22',NULL,'partnership_final_documents/DrAWntcnvzOMPSDALMXfosTV1twPEFnoM37JTmzx.pdf',NULL),
(67,'Implementation Agreement','001/UN24.7.1/IH/KS/2025','WORKSHOP PENYUSUNAN RUBRIK TUGAS MATA KULIAH KELAS  PARTISIPATIF DAN KOLABORATIF','<p>Perjanjian Implementasi Kerjasama antara Fakultas Hukum Universitas Palangka Raya dan &nbsp;Fakultas Hukum Universitas Islam Sultan Agung Semarang dalam bentuk Workshop Penyusunan Rubrik Tugas Mata Kuliah Kelas Partisipatif dan Kolaboratif dengan nomor IA &nbsp;001/UN24.7.1/IH/KS/2025</p>',4,'active','2025-01-02','2025-06-02',NULL,NULL,NULL,2,NULL,'partnership_documents/q7ZryHh4BPkhuWiFRN7rjBJatHi21BD8jNRjVGRX.pdf','2025-07-22 07:50:08','2025-07-23 09:12:14',NULL,'partnership_final_documents/LKN766XWgU6pEqyCFQ0a3nIziDu3qINK0IgWq3C8.pdf',NULL),
(68,'Implementation Agreement','05/UN24.6.2/KS/2025','Workshop Remote Sensing and Cloud Computing Using Google Earth Engine With Application To Landscape Carbon Exploration, Vegetation Changes Tracking and Flood and Burnt Area Mapping',NULL,13,'expired','2025-01-05','2025-01-05',NULL,NULL,NULL,NULL,2,'partnership_documents/3UvPNMMvwHUoEfNMG0L0X0euMwjB74G1kDugazz5.pdf','2025-07-23 05:12:13','2025-07-23 05:12:25',NULL,NULL,NULL),
(69,'Memorandum of Agreement','6249/UN24.3/AK/2022','PERJANJIAN KERJASAMA','<p>Perjanjian Kerjasama Antara Fakultas Keguruan dan Ilmu Pendidikan Universitas Palangka Raya dengan Fakultas Tarbiyah dan Ilmu Keguruan IAIN Palangka Raya </p><p>Tentang: Kegiatan Perkuliahan, Praktikum, Penelitian, Pengabdian Masyarakat Serta Kegiatan Ilmiah Lainnya</p>',26,'active','2022-12-01','2027-12-01',NULL,NULL,NULL,NULL,15,'partnership_documents/5d8dBT8v3rYGPVkmLj5wm7FI05otSJgD6nQrdVEl.pdf','2025-07-23 09:10:33','2025-07-23 09:10:33',NULL,NULL,NULL),
(72,'Memorandum of Agreement','257/UN24.3.3.2/DT/2023','Perjanjian Kerja Sama dengan SMP Negeri 7 Cempaga','<p>Perjanjian kerja sama untuk meningkatkan mutu dan kualitas pendidikan mahasiswa Program Studi PBSI UPR serta pengembangan kemampuan sumber daya guru SMP Negeri 7 Cempaga melalui perlibatan dalam kegiatan-kegiatan ilmiah dan non-ilmiah yang diselenggarakan oleh Program Studi PBSI UPR</p>',71,'active','2023-07-27','2028-07-27',NULL,NULL,NULL,NULL,59,'partnership_documents/CS3vOk0wUL8coD4jhM33Yfc2l4HcoT0ZeGFjnk7w.pdf','2025-07-24 03:39:52','2025-07-24 04:02:59',NULL,NULL,NULL),
(73,'Implementation Agreement','B.326/SKIPM.PKY/KS.320/V/2024 / 2432/UN.24.5/KS/2024','Pelaksanaan Praktisi Mengajar, Mata Kuliah Dasar-Dasar  Mikrobiologi Program Studi Teknologi Hasil Perikanan  Di Stasiun Karantina Ikan, Pengendalian Mutu Dan Keamanan Hasil Perikanan (SKIPM)Palangka Raya','<p class=\"ql-align-justify\">Tujuan <strong><em>Implementation of Arrangement</em></strong> ini adalah untuk kegiatan praktisi Mengajar&nbsp;dalam kegiatan perkuliahan Mata Kuliah Dasar-Dasar Mikrobiologi mahasiswa Program Studi teknologi Hasil Perikanan dalam rangka peningkatan dan pengembangan kapasitas Sumber Daya Manusia.</p><p><br></p>',44,'active','2025-03-25','2025-04-29',NULL,NULL,NULL,NULL,33,'partnership_documents/tolKYNEyNOsNZlby47egHW6zAzwW6rJNseBTel9h.pdf','2025-07-24 03:40:49','2025-08-04 05:55:51',NULL,'partnership_final_documents/eaZiYyy0GsoILWZb9jOW1DQmTY7ht4xHKWAP5M0U.pdf',NULL),
(74,'Memorandum of Agreement','390/UN24.3.3.2/DT/2023','PKS dengan Magister Sastra Universitas Gadjah Mada','<p>Perjanjian kerja sama untuk peningkatan mutu dan kualitas pendidikan mahasiswa Program Studi PBSI UPR serta pengembangan kemampuan sumber daya pengajar melalui pelibatan dalam kegiatan-kegiatan ilmiah dan non ilmiah yang diselenggarakan oleh Program Studi PBSI UPR.</p>',71,'active','2023-09-02','2025-09-02',NULL,NULL,NULL,NULL,59,'partnership_documents/agAesuJLHphyRS0plBeGo99rz0CphxaBYtSx69XS.pdf','2025-07-24 03:55:32','2025-07-24 04:15:05',NULL,NULL,NULL),
(75,'Implementation Agreement','B.326/SKIPM.PKY/KS.320/V/2024 / 2432/UN.24.5/KS/2024','Pelaksanaan Praktikum, Mata Kuliah Dasar-Dasar Mikrobiologi Program Studi Teknologi Hasil Perikanan Di Stasiun Karantina Ikan, Pengendalian Mutu Dan Keamanan Hasil Perikanan (SKIPM) Palangla Raya','<p>Tuluan <strong><em>Implementation of Arrangement</em></strong> ini adalah untuk pemanfaatan sarana dan prasarana Laboratorium dalam kegiatan Praktikum Mata Kuliah Dasar-Dasar Mikrobiologi mahasiswa Program Studi teknologi Hasil Perikanan dalam rangka peningkatan dan pengembangan kapasitas Sumber Daya Manusia.</p>',1,'active','2025-04-21','2025-04-22',NULL,NULL,NULL,NULL,33,'partnership_documents/Uy35hfPwJCvkrJ4WXjoa1Uw2mfoVdD49IxeLos9h.pdf','2025-07-24 03:59:47','2025-08-09 09:30:25',NULL,'partnership_final_documents/XEAg4ngM6O9b5uuW7ETabnw1daQWQtGNKMDBskrQ.pdf',NULL),
(77,'Memorandum of Agreement','36590 / 2750/UN24/KS/2023','MoU RMIT University Australia dan Prodi Agroteknologi FAPERTA, UPR','<p>Kerjasama UPR dan RMIT University dalam bidang penelitian dan pelatihan tentang lahan gambut tropis di indonesia</p>',1,'active','2023-11-22','2025-11-22',NULL,NULL,NULL,NULL,34,'partnership_documents/cU5yYHuoP1cVFxHsrYWKhNFBauyz1uJUeRyHMMQi.pdf','2025-07-24 04:54:33','2025-08-10 14:17:14',NULL,'partnership_final_documents/C3y2437m1G5gaQEnNSuxnnnTgPjNTwpUyC4U1Xxu.pdf',NULL),
(78,'Memorandum of Agreement','3969/UN24.3/KP/2025','KERJASAMA KEGIATAN PENDIDIKAN PENELITIAN PENGABDIAN KEPADA MASYARAKAT SERTA PENINGKATAN KUALITAS SDM','<p>KERJASAMA KEGIATAN PENDIDIKAN PENELITIAN PENGABDIAN KEPADA MASYARAKAT SERTA PENINGKATAN KUALITAS SDM</p>',1,'active','2025-06-23','2030-06-23',NULL,NULL,NULL,NULL,NULL,'partnership_documents/EhOYCCU4FmlsD6p1avIdIp4X0P5cHHRelzei4KNK.pdf','2025-07-24 04:56:14','2025-08-09 10:03:18',NULL,NULL,NULL),
(79,'Implementation Agreement','102/UN24.3.3.2/KS/2024','Rancangan Pelaksanaan Kerja Sama dengan LPK Wajo Intelektual Mandiri','<p>Rancangan Pelaksanaan Kerja Sama mengenai pelaksanaan Lokakarya Penyusunan Kurikulum Pelatihan antara Lembaga Pelatihan Kerjan Wajo Intelektual Mandiri dengan Program Studi Pendidikan Bahasa dan Sastra Indonesia Universitas Palangka Raya</p>',1,'expired','2024-01-18','2024-01-20',NULL,NULL,NULL,NULL,59,'partnership_documents/FLMxxDhi9YUXMwQAUftW9BuIqufr7JKVeH3XriVB.pdf','2025-07-24 05:00:37','2025-08-11 02:57:55',NULL,NULL,NULL),
(80,'Memorandum of Agreement','1891/UN24.3/KP/2025','PKS dengan Tribun Kalteng','<p>Perjanjiang Kerja Sama terkait program Magang Jurnalistik antara Program Studi Pendidikan Bahasa dan Sastra Indonesia dengan Tribun Kalteng</p>',1,'active','2025-02-02','2026-02-02',NULL,NULL,NULL,NULL,59,'partnership_documents/w8TVVgpFifFAkW28Yvv9qWZ50Yr9u2YjmIQQkYWq.pdf','2025-07-24 05:23:01','2025-08-10 03:05:38',NULL,'partnership_final_documents/uRJkbhpHV0kfzUU7R0NTiye0KkxMfk5jncOyipD2.pdf',NULL),
(81,'Memorandum of Agreement','1897/UN24.3/KP/2025','PKS dengan PT. Jurnal Media Kini','<p>Perjanjian Kerja Sama program Magang Jurnalistik antara Program Studi Pendidikan Bahasa dan Sastra dengan PT. Jurnal Media Kini</p>',1,'active','2025-02-06','2026-02-06',NULL,NULL,NULL,NULL,59,'partnership_documents/zHkExCUKnOWKaoG8Xp8ZMdxuDaoXhhpPQ02wGfPC.pdf','2025-07-24 05:31:28','2025-08-10 03:34:40',NULL,'partnership_final_documents/oThsVqB23p75x5l98gs58JJ4eIfImPkcsJSFdtYg.pdf',NULL),
(82,'Implementation Agreement','101/UN24.3.3.2/KS/2024','Rancangan Pelaksanaan Kerja Sama','<p>Rancangan Pelakasanaan Kerja Sama mengenai pelaksanaan Lokakarya Menulis dengan topik \"Analisis Kesalahan Berbahasa pada Karya Tulis Ilmiah Mahasiswa\" yang dilaksanakan oleh Program Studi Pendidikan Bahasa Indonesia Fakultas Ilmu Pendidikan Universitas Puangrimaggalatung (Uniprima) dengan Program Studi Pendidikan Bahasa Indonesia Universitas Palangka Raya</p>',1,'expired','2024-01-22','2024-01-23',NULL,NULL,NULL,NULL,59,'partnership_documents/IbwBP5q6ndix5MejkQHpoiXE0l5R9Ce5yGb92iMW.pdf','2025-07-24 05:50:49','2025-08-11 03:05:08',NULL,NULL,NULL),
(83,'Implementation Agreement','319/UN24.3.1.2/BK/2025','Implementasi Kerja Sama Antara Program Studi S1 FKIP Universitas Palangka Raya Dengan Program Studi S1 FKIP Universitas Pattimura Tentang Seminar Nasional','<p>PENYELENGGARAAN IMPLEMENTASI KERJA SAMA UNTUK SALING MENDUKUNG KEGIATAN PARA PIHAK DALAM RANGKA KERJA SAMA YANG BERKAITAN DENGAN SEMINAR NASIONAL TAHUN 2025.</p>',1,'active','2025-04-30','2026-04-30',NULL,NULL,NULL,NULL,8,'partnership_documents/Ri8amYKtXppaR5NUKadfp3zSjOyrumCNkGgujYla.pdf','2025-07-24 06:44:11','2025-08-11 03:35:08',NULL,NULL,NULL),
(84,'Implementation Agreement','130/UN24.B14.05/AK/2025','Magang Sosiologi FISIP UPR dengan Petuk Katimpun','<p>IA yang berisikan kerjasama antara sosiologi UPR dengan Kelurahan Petuk Katimpun, Pemerintah Kota Palangka Raya. Kegiatan ini mencangkup pemetaan sosial pada wilayah sosial dan budaya masyarakat di kelurahan petuk katimpun</p>',51,'active','2025-05-04','2025-08-10',NULL,NULL,NULL,NULL,40,'partnership_documents/AhZTeLjcHDmMd8HUSdPKYlkLcvUUkX8E48jObc8K.pdf','2025-07-24 06:44:11','2025-07-24 08:11:33',NULL,'partnership_final_documents/0oEy1V9NTvojE04EVVhHOlY0EhfgPVk0C9D0eURm.pdf',NULL),
(85,'Memorandum of Agreement','1770/UN24.3/KS/2025','KEMITRAAN DALAM PENDIDIKAN, PENELITIAN, DAN PENGABDIAN KEPADA MASYARAKAT','<p>KEMITRAAN PENDIDIKAN, PENELITIAN, DAN PENGABDIAN KEPADA MASYARAKAT</p>',1,'active','2025-03-07','2028-03-07',NULL,NULL,NULL,NULL,NULL,'partnership_documents/ib8dqdN78scDGcJjrboF2nvDPGyWXDvzufUnNais.pdf','2025-07-24 06:54:19','2025-08-10 14:41:27',NULL,NULL,NULL),
(86,'Memorandum of Understanding','2722/UN24.3/DT/2025','Perjanjian Kerja Sama Antara FKIP Universitas Palangka Raya dan FKIP Universitas Pattimura Tentang Bidang Pengembangan Program Tridarma Perguruan Tinggi','<p>Perjanjian mencakup Penyelenggaraan Pendidikan dan Pengajaran, Penelitian, dan Pengabdian Kepada Masyarakat dalam rangka meningkatkan kerja sama dalam bidang Pengembangan Program Tridarma Perguruan Tinggi.</p>',1,'active','2025-05-03','2030-05-03',NULL,NULL,NULL,NULL,8,'partnership_documents/dHgkC0mm0LtKhRPRbpAGElWSJlYMNfREIQ1c6bnI.pdf','2025-07-24 07:05:43','2025-08-10 14:46:15',NULL,NULL,NULL),
(88,'Implementation Agreement','1562/UN24.B14.05/AK/2025','Magang Sosiologi FISIP UPR dengan WALHI','<p>Kerjasama jurusan sosiologi dengan WALHI Kalteng pad kegiatan magang sosiologi, melakukan kajian dan pemetaan sosial di wilayah potensi konflik teritorial pada masyarakat di wilayah kerja WALHI.</p>',1,'active','2025-05-02','2025-08-08',NULL,NULL,NULL,NULL,40,'partnership_documents/CBryJxtqMgKiKUWUhcKqQGFZUmiAlPE8Kd5bc7By.pdf','2025-07-24 07:27:00','2025-08-10 12:26:57',NULL,'partnership_final_documents/rs0iSF6OcAiwegsJl0Dy7UXU3oNgbL9hMMi7lx2z.pdf',NULL),
(89,'Memorandum of Understanding','1652/UN24.B14.05/AK/2025','Magang Sosiologi Jurusan Sosiologi Fisip UPR','<p>Kerjasama jurusan sosiologi dengan Yayasan Tambuhak Sinta dalam kegiatan magang sosiologi yang mencangkup kajian sosial mapping pada wilayah sosial, ekonomi dan budaya masyarakat dalam wilayah kerja YTS</p>',1,'active','2025-08-09','2025-08-09',NULL,NULL,NULL,NULL,NULL,'partnership_documents/SZctQFBN8AEaNxbfF2KBlHoMPShA7U7LI6PMIuud.pdf','2025-07-24 07:56:37','2025-08-10 12:19:12',NULL,NULL,NULL),
(90,'Implementation Agreement','1571/UN24.B14.05/AK/2025','Magang Sosiologi (SCTV Kalteng)','<p>Kerjasama Sosiologi dengan SCTV dalam hal magang. Mencakup kajian implemetasi dalam bidang jurnalistik dan Praktik Kerja Lapangan</p>',1,'active','2025-06-14','2025-07-19',NULL,NULL,NULL,NULL,40,'partnership_documents/vqazo8OwbxVhIrd7ssFKQmzifC7h4Q4BmxSY9bLW.pdf','2025-07-24 08:22:58','2025-08-10 12:33:51',NULL,'partnership_final_documents/livDQ5o62zpnlEAV6V3apliDfLMZdtE4puWWl1C6.pdf',NULL),
(91,'Implementation Agreement','1572/UN.24KS/2025','Magang Sosiologi FISIP UPR (Kereng Bangkirai)','<p>Kerjasama sosiolgi dengan Kereng Bangkirai dalam bidang magang sosiologi, mencakup kajian dan pemetaan sosial pada wilayah sosial, ekonomi, dan budaya masyarakat dala wilayah kelurahan Kereng Bangkirai.</p>',1,'active','2025-05-03','2025-08-09',NULL,NULL,NULL,NULL,40,'partnership_documents/6SXMar9xWHNzgfJT8ph6vnvECNcTW28J2NFAp2zg.pdf','2025-07-24 08:30:30','2025-08-10 12:38:12',NULL,'partnership_final_documents/4t73iIruBGXn6b3qjM17n5008bikDtF4nQQuSj3g.pdf',NULL),
(92,'Implementation Agreement','511/UN24.5.3/SP/2025; 522/1572/I.3/DISHUT','Pendidikan, Penelitian, Pengabdian Masyarakat dan Pengembangan Sumber Daya Manusia',NULL,1,'active','2025-06-24','2030-06-24',NULL,NULL,NULL,NULL,29,'partnership_documents/Ip2Lu89BR0urBAXMjVHyokimq4SncjyV2KUlnMPg.pdf','2025-07-24 10:44:55','2025-08-10 13:02:03',NULL,'partnership_final_documents/b6j2f3b5qXn4AV0vaJP7V9u9FDN7C8BjKTvRUkbj.pdf',NULL),
(93,'Implementation Agreement','104/UN24.5.3/KS/2025; 002/MoU/Y-PAL/II/2025','Pengembangan Kapasitas Sumber Daya dan Kemitraan',NULL,1,'active','2025-02-03','2030-02-03',NULL,NULL,NULL,NULL,29,'partnership_documents/VIlOTJ8mV42TLqYTRFIYyNJGP8VIw0unOzbmY7h6.pdf','2025-07-24 10:53:10','2025-08-10 13:14:29',NULL,NULL,NULL),
(94,'Memorandum of Agreement','0460/UN24.5/AK.00.07/2025; 001/PKS/Y-PAL/II/2025','Pengembangan Kapasitas Sumber Daya dan Kemitraan di Lingkungan Jurusan/Program Studi di Fakultas Pertanian Universitas Palangka Ray',NULL,1,'active','2025-02-04','2028-02-04',NULL,NULL,NULL,NULL,29,'partnership_documents/s0wMsyzE8HS3QuYf1MfuUsPihun1aMaziFHWmpIR.pdf','2025-07-24 11:01:27','2025-08-10 13:25:44',NULL,NULL,NULL),
(95,'Memorandum of Understanding','743/UN24.B14/AK2025','Praktik Kerja Lapangan Bidang Keahlian (PKL-BK)','<p>Perjanjian Kerja Sama Jurusan Ilmu Pemerintahan Fakultas Ilmu Sosial dan Ilmu Politik Universitas Palangka Raya dan Dinas Koperasi, Usaha Kecil dan Menengah Provinsi Kalimantan Tengah Tentang Pendidikan, Penelitian, Pengabdian kepada Masyarakat dan peningkatan kualitas sumber daya manusia.</p>',1,'active','2025-08-10','2025-08-10',NULL,NULL,NULL,NULL,NULL,NULL,'2025-07-24 22:00:18','2025-08-10 13:36:03',NULL,NULL,NULL),
(96,'Implementation Agreement','102/UN24.B14.07/AK/2025','Promosi Jalur Masuk Rekognisi Pembelajaran Lampau (RPL) Jurusan Ilmu Pemerintahan','<p>Perjanjian Kerja Sama antara Jurusan Ilmu Pemerintahan Fakultas Ilmu Sosial dan Ilmu Politik Universitas Palangka Raya dan Dinas Perpustakaan dan Kearsipan Kabupaten Pulang Pisau tentang Pendidikan, Penelitian, Pengabdian kepada Masyarakat dan Magang/Praktik Kerja Lapangan Tahun 2025</p>',1,'active','2025-06-23','2029-06-23',NULL,NULL,NULL,NULL,42,'partnership_documents/c1X509XbiGAtHNBCeSbWj4HfQpsQ0IgMrCctFEfu.pdf','2025-07-25 02:04:17','2025-08-10 13:42:02',NULL,'partnership_final_documents/EaUE9wIWlfSZklkPWC1KQK8tzRyi2XkmKWJLiPRr.pdf',NULL),
(97,'Implementation Agreement','103/UN24.B14.07/AK/2025','Promosi Jalur Masuk Rekognisi Pembelajaran Lampau (RPL) Jurusan Ilmu Pemerintahan','<p>Perjanjian Kerja Sama antara Jurusan Ilmu Pemerintahan dengan Badan Keuangan dan Aset Daerah Kabupaten Kotawaringin Timur tentang Pendidikan, Penelitian, Pengabdian Kepada Masyarakat dan Magang/Praktik Kerja Lapangan Tahun 2025.</p>',1,'active','2025-06-27','2029-06-27',NULL,NULL,NULL,NULL,42,'partnership_documents/sLrl3ARytkMTlKHmFvbmPRe0fAzmJ5S057iP7gRv.pdf','2025-07-25 02:12:18','2025-08-10 13:46:56',NULL,'partnership_final_documents/Flc5tsJ972Oc0fQfFqItXwPQb4SGJyOwDdG9Qft9.pdf',NULL),
(98,'Memorandum of Agreement','-','MoU between UPR and ACIAR','<p>Kerjasama Universitas Palangka Raya dengan Australian Centre For International Agricultural Research Of the Government of Australia dalam bentuk penelitian dan pengembangan dalam bidang pertanian</p>',1,'active','2023-08-30','2027-08-30',NULL,NULL,NULL,NULL,34,'partnership_documents/zKfV1GgfIr9KdtFMbQU736d9HsyC9x4mScuTAsZp.pdf','2025-07-25 04:35:42','2025-08-10 14:05:09',NULL,'partnership_final_documents/IeYtx8Jb1IOEvAm9EtnPA47lAyKaOaom6aBK7E92.pdf',NULL),
(100,'Memorandum of Agreement','2381/UN24.3/KS2025','Memorandum of Agreement on joint research, joint conference, visiting lecturer, internship, community service, and students\' competition','<p>Dokumen ini merupakan MoA antara Fakultas Keguruan dari Universitas PGRI Adi Buana Surabaya dan Fakultas Keguruan dan Ilmu pendidikan Universitas Palangka Raya. Bentuk kerjasama antara dua belah pihak adalah joint research,  joint conference, visiting lecturer, internship, community service dan students\' competition.</p>',30,'active','2025-04-01','2030-04-01',NULL,NULL,NULL,NULL,19,'partnership_documents/U7FtPxI152dwDglSzqs7z8KvMx4uXKfzIMbkEBHV.pdf','2025-07-26 09:20:05','2025-07-26 09:20:05',NULL,NULL,NULL),
(102,'Memorandum of Agreement','20/UN24.3.1.2/BK/2025','Nota Perjanjian Kerja Sama Antara FKIP Universitas Palangka Raya dan FKIP Universitas Muhammadiyah Sampit Tentang Kerja Sama Kegiatan  Tridharma Perguruan Tinggi','<p>Penyelenggaraan  Penelitian, Pendidikan dan Pelatihan, dan Pengabdian Kepada Masyarakat, serta Pengembangan Kelembagaan, SDM dalam rangka Pelaksanaan Tridharma Perguruan Tinggi.</p>',19,'active','2025-01-17','2030-01-17',NULL,NULL,NULL,NULL,8,'partnership_documents/25KLZ6fesxzAj49waXn1iNJLAjvONBoCbFzsvuAt.pdf','2025-07-28 01:43:35','2025-07-28 01:43:35',NULL,NULL,NULL),
(103,'Implementation Agreement','005/UN24.7.1/IH/KS/2025','PENYELENGGARAAN KERJASAMA RUMAH KONSULTASI HUKUM DI DESA DANAU PANTAU KECAMATAN TIMPAH KABUPATEN KAPUAS DALAM MENINGKATKAN AKSES DAN KESADARAN HUKUM','<p>Perjanjiang Implementasi Kerjasama antara Fakultas Hukum Universitas Palangka Raya dan Pemerintah Desa Danau Pantau Kecamatan Timpah Kabupaten Kapuas, dalam penyelenggaraan rumah konsultasi hukum untuk meningkatkan akses dan kesadaran hukum di Desa Danau Pantau, dengan nomor perjanjian kerjasama 2270/UN24.7/KS/2024 dan Nomor IA 005/UN24.7.1/IH/KS/2025</p>',1,'active','2025-04-06','2025-10-03',NULL,NULL,NULL,NULL,NULL,'partnership_documents/Lxgg9YCE3mu2kzxOg71JKFGu8KxT6BLGxt2RBVdb.pdf','2025-07-28 01:45:14','2025-08-08 07:55:50',NULL,'partnership_final_documents/HYvgosBmanJnEOkP0mJtkT0nSdFSgxM0XBCZcj5Y.pdf',NULL),
(104,'Implementation Agreement','21/UN24.3.1.2/BK/2025','Implementasi Kerja Sama Program Studi BK  FKIP Universitas Palangka Raya Dengan Program Studi BK FKIP Universitas Muhammadiyah Sampit Tentang Kegiatan Banchmarking Dalam Bentuk Outing Class.','<p>Kegiatan Banchmarking dalam bentuk Program Outing Class antara Dosen dan Mahasiswa Program Studi Bimbingan dan Konseling FKIP Universitas Palangka Raya dengan Program Studi Bimbingan dan Konseling FKIP Universitas Muhhamadiyah Sampit di Laboratorium Bimbingan dan Konseling FKIP Universitas Palangka Raya.</p>',19,'active','2025-01-17','2028-01-17',NULL,NULL,NULL,NULL,8,'partnership_documents/tyz8hpLmaT6yGlY06fnffepcEwWLzTbd2UNjFJhn.pdf','2025-07-28 02:08:48','2025-07-28 02:08:48',NULL,NULL,NULL),
(105,'Implementation Agreement','890/UN24.3.3.1/DT/2025','Perjanjian Kerja Sama antara Universitas Katolik Widya Mandira dengan Universitas Palangka Raya  tentang Pendidikan , Pengajaran, Penelitian dan Pengabdian kepada Masyarakat','<p>Terlaksananya kegiatan Pertukaran Mahasiswa Merdeka pada mata kuliah Discourse Analysis yang diikuti oleh mahasiswa Unwira di UPR pada Semester Genap 2024/2025.</p>',1,'active','2023-02-13','2026-02-13',NULL,NULL,NULL,NULL,19,'partnership_documents/7MVIo1NBv4cN60BL5ikF6VHKmnaHIO215wb8VFvy.pdf','2025-07-28 02:42:15','2025-08-08 06:17:08',NULL,'partnership_final_documents/oBQSEbmUwcxYDuklncvEzvhAmCh0OjnWn1hZq6hn.pdf',NULL),
(106,'Implementation Agreement','806/UN24.3.3.1/DT/2025','Pengabdian Kepada Masyarakat',NULL,30,'active','2025-07-23','2025-07-23',NULL,NULL,NULL,NULL,19,'partnership_documents/w2HtyowqPSlFF8QzpYqUsaZFDxjs33pNTUlD90Ml.pdf','2025-07-28 03:00:36','2025-07-28 03:01:41',NULL,'partnership_final_documents/ifeiFp581d6p4ew0OYvFmeezRBsnS50ZFsgvgbrT.pdf',NULL),
(107,'Implementation Agreement','462/UN24.3.3.1/DT/2025','PENYELENGGARAAN SEMINAR DARING','<p>Terlaksananya kegiatan seminar daring berjudul: Advancing Educational Research: A Comprehensive Webinar Series: Mastering Quantitative Methods for Impactful Educational Studies</p>',1,'active','2025-05-15','2025-05-15',NULL,NULL,NULL,NULL,19,'partnership_documents/9hsxchTzb4noS4tQoxNcuOdUpynJkNiHyJCoYSnm.pdf','2025-07-28 03:16:09','2025-08-08 06:19:59',NULL,'partnership_final_documents/zY2tQGXZAfKAood10EjnsTOGMER0ifyoHEUXOFg5.pdf',NULL),
(108,'Implementation Agreement','506/UN24.3.2.1/BK/2025','Implementasi Kerja Sama Antara Program Studi S1 Bimbingan dan Konseling FKIP Universitas Palangka Raya Dengan MGBK SMP Kota Palangka Raya','<p>Mengadakan Pelatihan, dan Kolaborasi Pengabdian dan Penelitian bagi komunitas MGBK SMP se Kota Palangka Raya</p>',19,'active','2025-07-28','2027-07-28',NULL,NULL,NULL,NULL,8,'partnership_documents/Up9bO8NVurJRULDDbTi4bFFkuHA1O3VQvzx47q64.pdf','2025-07-28 06:07:21','2025-07-28 06:07:21',NULL,NULL,NULL),
(109,'Implementation Agreement','184/UN24.3.1.4/DT/2025','PENYELENGGARAAN TRI DARMA PERGURUAN TINGGI','<p>PERJANJIAN KERJA SAMA ANTARA PROGRAM STUDI TEKNOLOGI PENDIDIKAN DENGAN SDN-4 TAMBUN RAYA</p>',21,'active','2025-07-24','2028-07-24',NULL,NULL,NULL,NULL,10,'partnership_documents/luQhZq6xUs7DS7nf241OlsuVx3e5eXLYk0vecQqg.pdf','2025-07-30 04:16:43','2025-07-30 04:16:43','2722/UN24.3/DT/2025',NULL,NULL),
(110,'Memorandum of Agreement','PKS.02/BPTH.WIL1/SBSDG/DAS.02.16/B/06/2025 dan 3208/UN24.5/KS/2025','Pengelolaan Calon Kebun Benih Semai Shorea Leprosula Miq. dan Dyera polyphylla','<p>Perjanjian Kerja Sama antara Balai Perbenihan Tanaman Hutan Wilayah I Direktorat Jenderal Pengelolaan Daerah Aliran Sungai dan Rehabilitasi Hutan dengan Fakultas Pertanian Universitas Palangka Raya tentang Pengelolaan Calon Kebun Benih Semai Shorea Leprosula Miq. dan Dyera polyphylla</p>',97,'active','2025-06-16','2030-06-16',NULL,NULL,NULL,6,NULL,'partnership_documents/KzKkwTTfq39oQJVH6ghkgVLoVZwjjANOzsnQOQlK.pdf','2025-08-04 03:21:42','2025-08-04 03:21:42',NULL,NULL,NULL),
(111,'Memorandum of Agreement','000.6.5.3/2010/4/BAPPERIDA/2025  dan 3673/UN24.5/KS/2025','Kegiatan Penelitian dan Pengembangan Bidang Ekonomi dan Pembangunan, Sub Kegiatan Penelitian dan Pengembangan Kelautan dan Perikanan. Kajian Potensi Ekonomi Perikanan Tangkap Danau Hanjalutung Kota Palangka Raya','<p>Perjanjian Kerja Sama antara Badan Perencanaan Pembangunan, Riset dan Inovasi Daerah Kota Palangka Raya dengan Fakultas Pertanian Universitas Palangka Raya tentang Keputusan&nbsp;Kegiatan Penelitian dan Pengembangan Bidang Ekonomi dan Pembangunan, Sub Kegiatan Penelitian dan Pengembangan Kelautan dan Perikanan. Kajian Potensi Ekonomi Perikanan Tangkap Danau Hanjalutung Kota Palangka Raya</p>',97,'active','2025-07-01','2025-08-31',NULL,NULL,NULL,6,NULL,'partnership_documents/o2AavB4k0WEqXED7W0doRAIycN82TUwGccAGf0QS.pdf','2025-08-04 03:28:57','2025-08-04 03:28:57',NULL,NULL,NULL),
(112,'Memorandum of Agreement','100.3.7/393/DISTANIK/2025 dan 3979/UN24.5/KS/202','Swakelola Tipe II Kegiatan Survei Investigasi dan Desain Cetak Sawah Kabupaten Murung Raya Provinsi Kalimantan Tengah Tahun 2025','<p>Kesepakatan Kerja Sama antara Dinas Pertanian dan Perikanan Kabupaten Murung Raya Provinsi Kalimantan Tengah dengan Fakultas Pertanian Universitas Palangka Raya tentang Swakelola Tipe II Kegiatan Survei Investigasi dan Desain Cetak Sawah Kabupaten Murung Raya Provinsi Kalimantan Tengah Tahun 2025</p>',97,'active','2025-07-14','2026-07-14',NULL,NULL,NULL,6,NULL,'partnership_documents/0WjaDh8zlzhbl6ArO5x1lFowpUdIRdKwXwfktog3.pdf','2025-08-04 03:35:16','2025-08-04 03:35:16',NULL,NULL,NULL),
(114,'Memorandum of Agreement','858/UN24.6/KS/2025','MEMORANDUM of AGGREMENT (MoA) ANTARA FAKULTAS TEKNIK UPR DENGAN IKATAN NASIONAL KONSULTAN INDONESIA PROVINSI KALIMANTAN TENGAH','<p>MEMORANDUM of AGGREMENT (MoA) ANTARA FAKULTAS TEKNIK UPR DENGAN IKATAN NASIONAL KONSULTAN INDONESIA PROVINSI KALIMANTAN TENGAH TENTANG KERJA SAMA TRIDHARMA PERGURUAN TINGGI</p>',3,'active','2025-04-22','2029-04-22',NULL,NULL,NULL,NULL,NULL,'partnership_documents/TpKO2NluevwqhxtYZwEIY33FkrC6lCB0lLDBORs1.pdf','2025-08-06 09:38:33','2025-08-12 09:53:08',NULL,NULL,NULL),
(117,'Memorandum of Agreement','1259/UN24.B14/KS/2025','PERJANJIAN KERJA SAMA FAKULTAS ILMU SOSIAL DAN ILMU POLITIK DENGAN BADAN PENGAWAS PEMILIHAN UMUM KOTA PALANGKA RAYA','<p>PERJANJIAN KERJA SAMA ANTARA BADAN PENGAWAS PEMILIHAN UMUM KOTA PALANGKA RAYA DAN FAKULTAS ILMU SOSIAL DAN ILMU POLITIK UNIVERSITAS PALANGKA RAYA NOMOR: 045/HM.02.03/K.KH-14/04/2025 NOMOR: 1259/UN24.B14/KS/2025 TENTANG PELAKSANAAN TRIDHARMA PERGURUAN TINGGI DI BIDANG PENDIDIKAN, PENELITIAN, PENGABDIAN KEPADA MASYARAKAT DAN PENGAWASAN PARTISIPATIF</p>',1,'active','2025-04-29','2029-04-29',NULL,NULL,NULL,NULL,NULL,'partnership_documents/ID1bwlL700IHb91nWHgnNGzMNIc3PfXzxwqQJYs4.pdf','2025-08-11 03:49:01','2025-08-12 04:35:26',NULL,NULL,NULL),
(120,'Memorandum of Agreement','415/UN24.3/LP.00.01/2025','PKS FKIP UPR & APINDO KALTENG','<p>Penyelenggaraan Pendidikan, Penelitian, dan Pengabdian kepada Masyarakat dalam rangka Pelaksanaan Tridharma Perguruan Tinggi dan Program Merdeka Belajar Kampus Merdeka (MBKM)</p>',5,'active','2025-03-07','2028-03-07',NULL,NULL,NULL,3,NULL,'partnership_documents/peXQNVVIYJELr77DrgXqHIRQNarJCTQ3JJ3UYqyr.pdf','2025-08-14 09:35:28','2025-08-14 09:35:28','2327/UN24/KS/2024',NULL,NULL),
(121,'Memorandum of Agreement','0460/UN24.5/AK.00.07/2025 dan 001/PKS/Y-PAL/II/2025','Pengembangan Kapasitas Sumber Daya dan Kemitraan di Lingkungan Jurusan/Program Studi Di Fakultas Pertanian Universitas Palangka Raya','<p>PKS ini merupakan upaya Fakultas Pertanian UPR dan Yayasan Pandu Alam Lestari (PAL) dalam Melakukan kemitraan yang berorientasi pada Pengembangan Kapasitas Sumber Daya dan Kemitraan di Lingkungan Jurusan/Program Studi Di Fakultas Pertanian Universitas Palangka Raya.</p><p><br></p>',8,'active','2025-02-02','2028-02-02',NULL,NULL,NULL,6,NULL,'partnership_documents/OqSAIq4mUeCBjaYmV7QdolGWmjzNO96jHloyQ3ag.pdf','2025-08-14 09:56:11','2025-08-14 09:56:11',NULL,NULL,NULL),
(122,'Memorandum of Agreement','350/UN24.7/KS/2O25','PERJANJIAN KERJA SAMA ANTARA BAWASLU KOTA PALANGKA RAYA DAN FAKULTAS HUKUM UNIVERSITAS PALANGKA RAYA','<p>PERJANJIAN KERJA SAMA ANTARA BADAN PENGAWAS PEMILIHAN UMUM KOTA PALANGKA RAYA DAN FAKULTAS HUKUM UNIVERSITAS PALANGKA RAYA &nbsp;TENTANG PELAKSANAAN TRIDHARMA PERGURUAN TINGGI DI BIDANG PENDIDIKAN, PENELITIAN, PENGABDIAN KEPADA MASYARAKAT DAN PENGAWASAN PARTISIPATIF dengan Nomor PKS 350/UN24.7/KS/2O25</p>',4,'active','2025-02-24','2030-02-24',NULL,NULL,NULL,2,NULL,'partnership_documents/RggDz2BwiQgOlTsAOAzmBcHs1YkbWRdDuXBRBm4Y.pdf','2025-08-15 02:15:22','2025-08-15 02:15:22',NULL,'partnership_final_documents/vqTeNZ0owRtLL5VMJA7SKYi9APZBWZriTV7QwjmF.pdf',NULL),
(123,'Implementation Agreement','005/UN.24.7.1/IH/KS/2025','PERJANJIAN IMPLEMENTASI KERJASAMA FH UPR DAN BKAD KABUPATEN BARITO SELATAN','<p>PERJANJIAN IMPLEMENTASI KERJA SAMA ANTARA PROGRAM STUDI ILMU HUKUM FAKULTAS HUKUM UNIVERSITAS PALANGKA RAYA DENGAN BIDANG PENGEMBANGAN POTENSI PAD BKAD KABUPATEN BARITO SELATAN PROYEK KOLABORATIF PENDAMPINGAN DAN PEMUTAKHIRAN DATA KEPATUHAN DAN TAAT BAYAR PAJAK SERTA RETRIBUSI DAERAH dengan nomor PKS 1908/UN.24.7/KS/2024</p>',4,'active','2024-12-12','2025-10-01',NULL,NULL,NULL,2,NULL,'partnership_documents/zPEtTmWJkuE1ceraPW55b2Au9NPfp8efRRANfsXF.pdf','2025-08-15 02:27:44','2025-08-15 02:27:44',NULL,'partnership_final_documents/6wa8791baWAAt1eAN6sOKzPd0NqWqyskgw4GbGrm.pdf',NULL);
/*!40000 ALTER TABLE `partnerships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES
('3N4N7cFeoSLrphfGFkxTZVzRXduHhUHhDWoHmqIN',NULL,'43.156.52.226','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4240.193 Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoibU0zRlV5NFhIZ204Y0UxZE5ReDVPWGlyV0ZmU3VCYWR6bWljMmdoaCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZCI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMxOiJodHRwczovL3Npa2VybWEudXByLmFjLmlkL2xvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1755241820),
('57Nt1lQzcSYBRS5PVT6Pi7DpSU7JQOeJm6SFEBaB',NULL,'68.183.239.229','Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0','YTo0OntzOjY6Il90b2tlbiI7czo0MDoicEJTWE9XUTREdzdZYWpNeTVuWVFTclc2OFZNamJQZ1dHM1M3YnV1WSI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZCI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMxOiJodHRwczovL3Npa2VybWEudXByLmFjLmlkL2xvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1755252506),
('CleoX4rHpH80lJuU3Yi6Ba1iyist5zs5LB7fC892',NULL,'182.8.227.197','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiOG95TDdiVmdGMmNNRDh2cTIzb2czbmZzOElXSm83bUxiSVlaVDA1aSI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZCI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMxOiJodHRwczovL3Npa2VybWEudXByLmFjLmlkL2xvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1755251643),
('cY1Bt5ObMcd7sxwpZvkDvm14YCjV9lxx0TdHnYxZ',NULL,'43.156.52.226','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4240.193 Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiQ05CY3dyQjVOcmkxQ0xvQ3dJYnlHZEY1ZUQ1QU15a3FoWldHNXp5ZCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZCI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMxOiJodHRwczovL3Npa2VybWEudXByLmFjLmlkL2xvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1755242111),
('HUFtI9eK4VksmyqsHigaoaVHURaySDcqgooHzb28',NULL,'196.251.83.160','Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiN1ptaGFiS2cxSHV1bkZTRnZjZHUxcjBpYktCdm5MS1JvNWZJclQxTyI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZCI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMxOiJodHRwczovL3Npa2VybWEudXByLmFjLmlkL2xvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1755246827),
('irjZZgAvpPjllQcB7AcHSYAZV2OwyJNRZG32QqiL',NULL,'157.20.32.162','Mozlila/5.0 (Linux; Android 7.0; SM-G892A Bulid/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Moblie Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiWDZzclBxdE8zc2pGeGJwVzRLZHlXMDQ1RUFXOXhQRUt2ZjViT0hHdCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozNDoiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZC8/bG9hZG1lPSI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMxOiJodHRwczovL3Npa2VybWEudXByLmFjLmlkL2xvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1755242541),
('p4GajiUirUcG8eKozhNPFEbolQqYdg9yX9jawOLW',NULL,'157.20.32.162','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiOG9lMnZBS3FSRG5VeENtcEF1cTdiRUFJbDN4Uk9UYnhBRFlJV3h1WSI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozODoiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZC8/bG9hZG1lYmFieT0iO31zOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czozMToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZC9sb2dpbiI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1755242835),
('ro25UTBL3nIVCmnoXOCoTjS1WZ6CsIL130VqtmVI',NULL,'43.156.52.226','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4240.193 Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiajE4VkcyVDVyT3Z2UkJNN2Flam5Lc0taY0tJTHhneHlQVk1OWEw3cyI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czoyNToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZCI7fXM6OToiX3ByZXZpb3VzIjthOjE6e3M6MzoidXJsIjtzOjMxOiJodHRwczovL3Npa2VybWEudXByLmFjLmlkL2xvZ2luIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==',1755243837),
('RX3wnT8wnbSG2W20uAKXQCxL4FSQi6yXAsUYsR0m',NULL,'157.20.32.162','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36','YTo0OntzOjY6Il90b2tlbiI7czo0MDoiTlJydVgzV2kwSmw2d0diQ1FzSGdIbDdwSWhkVE9xOHpwOWU0S2c4UCI7czozOiJ1cmwiO2E6MTp7czo4OiJpbnRlbmRlZCI7czozNToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZC9pbmRleC5waHAiO31zOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czo0MToiaHR0cHM6Ly9zaWtlcm1hLnVwci5hYy5pZC9pbmRleC5waHAvbG9naW4iO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19',1755247392);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `study_programs`
--

DROP TABLE IF EXISTS `study_programs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `study_programs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `faculty_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `weight` double DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `study_programs_faculty_id_foreign` (`faculty_id`),
  CONSTRAINT `study_programs_faculty_id_foreign` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `study_programs`
--

LOCK TABLES `study_programs` WRITE;
/*!40000 ALTER TABLE `study_programs` DISABLE KEYS */;
INSERT INTO `study_programs` VALUES
(1,1,'TEKNIK INFORMATIKA - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(2,1,'TEKNIK SIPIL - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(3,1,'TEKNIK PERTAMBANGAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(4,1,'ARSITEKTUR - S1','2025-04-15 17:48:26','2025-05-28 06:42:00',0),
(5,8,'PENDIDIKAN DOKTER - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(6,8,'PROGRAM PROFESI DOKTER - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(7,3,'PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN (PPKN) - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(8,3,'BIMBINGAN KONSELING - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(9,3,'MANAJEMEN PENDIDIKAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(10,3,'TEKNOLOGI PENDIDIKAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(11,3,'PENDIDIKAN EKONOMI - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(12,3,'PENDIDIKAN MATEMATIKA - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(13,3,'PENDIDIKAN FISIKA - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(14,3,'PENDIDIKAN KIMIA - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(15,3,'PENDIDIKAN BIOLOGI - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(16,3,'PENDIDIKAN TEKNIK MESIN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(17,3,'PENDIDIKAN TEKNIK BANGUNAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(18,3,'PENDIDIKAN BAHASA DAN SASTRA INDONESIA - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(19,3,'PENDIDIKAN BAHASA INGGRIS - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(20,3,'PENDIDIKAN JASMANI, KESEHATAN DAN REKREMASI - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(21,3,'PENDIDIKAN GURU SEKOLAH DASAR - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(22,3,'PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(23,3,'PENDIDIKAN LUAR SEKOLAH - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(24,3,'PENDIDIKAN SENDRATASIK - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(25,5,'EKONOMI PEMBANGUNAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(27,5,'MANAJEMEN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(28,2,'ILMU HUKUM - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(29,6,'KEHUTANAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(30,6,'PETERNAKAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(31,6,'TEKNOLOGI INDUSTRI PERTANIAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(32,6,'ILMU SOSIAL EKONOMI PERTANIAN (AGRIBISNIS) - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(33,6,'TEKNOLOGI HASIL PERIKANAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(34,6,'AGROTEKNOLOGI - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(35,6,'MANAJEMEN SUMBERDAYA PERAIRAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(36,6,'BUDIDAYA PERAIRAN - S1','2025-04-15 17:48:26','2025-05-28 07:39:03',0),
(37,4,'FISIKA - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(38,4,'KIMIA - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(39,4,'BIOLOGI - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(40,7,'SOSIOLOGI - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(41,7,'ILMU ADMINISTRASI NEGARA - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(42,7,'ILMU PEMERINTAHAN - S1','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(43,9,'MAGISTER ILMU HUKUM - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(44,9,'MAGISTER PEND. LUAR SEKOLAH - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(45,9,'MAGISTER ILMU EKONOMI - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(46,9,'MAGISTER MANAJEMEN - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(47,9,'MAGISTER PENDIDIKAN BAHASA INGGRIS - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(48,9,'MAGISTER PENDIDIKAN BIOLOGI - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(49,9,'MAGISTER PENDIDIKAN DASAR - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(50,9,'MAGISTER PENGELOLAAN SUMBERDAYA ALAM DAN LINGKUNGAN - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(51,9,'MAGISTER ILMU PENGETAHUAN SOSIAL - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(52,9,'MAGISTER PENDIDIKAN EKONOMI - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(53,9,'MAGISTER PENDIDIKAN KIMIA - S2','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(54,9,'PROGRAM DOKTOR ILMU LINGKUNGAN - S3','2025-04-15 17:48:26','2025-04-15 17:48:26',0),
(59,3,'PBSI - S1','2025-05-20 09:50:00','2025-05-20 09:50:00',0),
(60,3,'PENDIIDKAN PROFESI GURU-S1','2025-05-20 09:56:32','2025-05-20 10:12:40',0),
(61,5,'AKUNTANSI - S1','2025-05-20 10:02:58','2025-05-20 10:05:58',0),
(62,5,'MAGISTER AKUNTANSI -S2','2025-05-20 10:11:16','2025-05-20 10:11:16',0),
(63,5,'PROGRAM DOKTOR ILMU MANAJEMEN -S3','2025-05-20 10:11:46','2025-05-20 10:11:46',0),
(64,8,'TEKNOLOGI LABORATORIUM MEDIS - S1','2025-05-20 19:12:28','2025-05-20 19:14:10',0),
(65,6,'MAGISTER ILMU KEHUTANAN - S2','2025-05-20 19:13:11','2025-05-20 19:13:51',0),
(66,6,'MAGISTER ILMU PERTANIAN - S2','2025-05-20 19:13:36','2025-05-20 19:13:36',0),
(67,4,'MATEMATIKA - S1','2025-05-20 19:14:44','2025-05-20 19:14:44',0),
(68,4,'FARMASI - S1','2025-05-20 19:14:58','2025-05-20 19:14:58',0),
(69,9,'MAGISTER PERENCANAAN WILAYAH DAN KOTA -  S2','2025-05-20 19:15:39','2025-05-20 19:15:39',0);
/*!40000 ALTER TABLE `study_programs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `upts`
--

DROP TABLE IF EXISTS `upts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `upts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `upts`
--

LOCK TABLES `upts` WRITE;
/*!40000 ALTER TABLE `upts` DISABLE KEYS */;
INSERT INTO `upts` VALUES
(6,'UPT TIK','2025-05-20 16:50:50','2025-05-20 16:50:50'),
(7,'UPT PERPUSTAKAAN','2025-05-20 16:58:15','2025-05-20 16:58:15'),
(8,'UPT BAHASA','2025-05-20 16:58:25','2025-05-20 16:58:25'),
(9,'UPT LAB TERPADU','2025-05-20 16:58:40','2025-05-20 16:58:40'),
(10,'UPT LAB ALAM','2025-05-20 16:59:18','2025-05-20 16:59:18'),
(14,'UPA BAHASA','2025-05-20 19:10:15','2025-05-20 19:10:15'),
(15,'UPA CIMTROP','2025-05-20 19:10:34','2025-05-20 19:10:34');
/*!40000 ALTER TABLE `upts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `password_raw` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `role` enum('super-admin','admin-fakultas','admin-program-studi','admin-institusi','admin-upt','pimpinan') NOT NULL DEFAULT 'super-admin',
  `faculty_id` bigint(20) unsigned DEFAULT NULL,
  `study_program_id` bigint(20) unsigned DEFAULT NULL,
  `institute_id` bigint(20) unsigned DEFAULT NULL,
  `upt_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  KEY `users_faculty_id_foreign` (`faculty_id`),
  KEY `users_study_program_id_foreign` (`study_program_id`),
  KEY `users_institute_id_foreign` (`institute_id`),
  KEY `users_upt_id_foreign` (`upt_id`),
  CONSTRAINT `users_faculty_id_foreign` FOREIGN KEY (`faculty_id`) REFERENCES `faculties` (`id`) ON DELETE SET NULL,
  CONSTRAINT `users_institute_id_foreign` FOREIGN KEY (`institute_id`) REFERENCES `institutes` (`id`) ON DELETE SET NULL,
  CONSTRAINT `users_study_program_id_foreign` FOREIGN KEY (`study_program_id`) REFERENCES `study_programs` (`id`) ON DELETE SET NULL,
  CONSTRAINT `users_upt_id_foreign` FOREIGN KEY (`upt_id`) REFERENCES `upts` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(1,'Super Admin','admin','$2y$12$Qz38tle40KsdUYke41lGEeNWsmt1/Di3L0n194vF6qn89degcw9q2','siapjaya20','VIp6DWm7DoNpUolCSDGjJO7qGQV4smQjjXIrRtepV709yqva9MSL7fJXH5Y0','2025-04-15 17:48:26','2025-04-15 17:48:26','super-admin',NULL,NULL,NULL,NULL),
(2,'Pimpinan','pimpinanupr','$2y$12$RBb/DijQO66pg/cBQiioQ.NFz4GDXFrDas/vnsqfh8L/yFvIVQ9uu','siapjaya20','Kx0kYNtjnj8GHhBwaUtQh5r6eQPdJ9gDn9YVVqFmsXi4ZT7Hcmx3fWvP80NN','2025-04-15 17:48:26','2025-06-20 07:41:09','pimpinan',NULL,NULL,NULL,NULL),
(3,'Admin FAKULTAS TEKNIK','teknik','$2y$12$MaKNKyPHdUXuOsAIWpRRIuMRNHpOT7HBfslc/WKcbx5VbOxFSx25O','teknik','1OuPYxHfh0Z2OJ0pq9rTJid6aeRdGKvdxBEyhfV44JhS7M4XfqHLv7Bi9cGH','2025-04-15 17:48:27','2025-05-28 06:36:58','admin-fakultas',1,NULL,NULL,NULL),
(4,'Admin FAKULTAS HUKUM','hukum','$2y$12$mp2dba/RmB9uU6Jqsiw0/.W6ZRgcRghesqONjxNNHsHZNvzghMPOq','hukum','7nVuICJjKOzc8LqlUlZNpHOK53saI5v9rpPwJptKiT3aKw90R4Y96fwpkg7J','2025-04-15 17:48:27','2025-05-28 06:37:22','admin-fakultas',2,NULL,NULL,NULL),
(5,'Admin FAKULTAS KEGURUAN DAN ILMU PENDIDIKAN','fkip','$2y$12$uibKi6IHRuaSUOAh9IpRtux/EPo18fAueme7G7Q1DkZWvWJG.BPnG','fkip','AMGZ83QN7iiAhAqZ7gMv4LLw1IWOUDYJUJWFn1L1IINYQu2JjQtr3TIkZpRq','2025-04-15 17:48:27','2025-05-28 06:37:39','admin-fakultas',3,NULL,NULL,NULL),
(6,'Admin FAKULTAS MATEMATIKA DAN ILMU PENGETAHUAN ALAM','fmipa','$2y$12$LAODeLwTFPjbVLaIoljIcuxF.js4RWqfRd3uPCHhr.dBTZLP/kVXS','fmipa',NULL,'2025-04-15 17:48:28','2025-05-28 06:37:52','admin-fakultas',4,NULL,NULL,NULL),
(7,'Admin FAKULTAS EKONOMI','feb','$2y$12$pyMpgV0UXilWzyytCDj0LuBA1E2YGH8np6X3ybjwXUbpsZRCLLyk2','feb','QWyAYYYjoUVnhUSKvTNsE02B79THhU5ijJ84xp7Q9PGz3E8N7EzvYUia5dGF','2025-04-15 17:48:28','2025-05-28 06:38:07','admin-fakultas',5,NULL,NULL,NULL),
(8,'Admin FAKULTAS PERTANIAN','pertanian','$2y$12$cFRNUpz35TisHJZ5mtsEG.B.AmitkKNnX326FH5cleglAt//lTp7W','pertanian','FpYk7IR9MNePpybhorygkdqcgB2ud2uo64I4BW0pb2OhDJb0x5VCcUhARd7K','2025-04-15 17:48:28','2025-05-28 06:38:19','admin-fakultas',6,NULL,NULL,NULL),
(9,'Admin FAKULTAS ILMU SOSIAL DAN POLITIK','fisip','$2y$12$h.krFJmsVc7QQuWjITJYguk4z5vnS8I8R5mBTkABcPq5mC/pxUbN.','fisip','UQYrR4bQIDACQq3vF9EOCciAUheEgEAFruIJcmbPt6il2XFpstRSsOUsWQ3Z','2025-04-15 17:48:28','2025-05-28 06:39:16','admin-fakultas',7,NULL,NULL,NULL),
(10,'Admin FAKULTAS KEDOKTERAN','kedokteran','$2y$12$DBmfoac2qZdTt.3qW9v.teo9C1Ce3gYumEeGrRy137ALJ9OcOAnmy','kedokteran',NULL,'2025-04-15 17:48:29','2025-05-28 06:40:11','admin-fakultas',8,NULL,NULL,NULL),
(11,'Admin PROGRAM PASCA SARJANA','pascasarjana','$2y$12$BeKQaMjv4VukK9WTKjE1geJ2LqoKyBOhjbc1XSVoiYJ.0wP.hM09e','pascasarjana',NULL,'2025-04-15 17:48:29','2025-05-28 06:40:30','admin-fakultas',9,NULL,NULL,NULL),
(12,'Admin TEKNIK INFORMATIKA - S1','ti_upr','$2y$12$7ShhOdYpjFmLJ/dJ2pLISOMbEQ7rL2xDlE2Q7gxmYycmWb5wOqV1q','ti_upr','Y1jL3uFdNh4Cebphk4g3MOuVUV3hyVrcWmzpYsObDbH4xgMeUQNuGeNHHWWn','2025-04-15 17:48:29','2025-07-17 05:32:05','admin-program-studi',NULL,1,NULL,NULL),
(13,'Admin TEKNIK SIPIL - S1','sipil','$2y$12$kD8CJi9X3LkzVfVklQkCAeinGreABwMn89dkdV7GKC9AKhfHZjk82','sipil','7ttobATNk7PMPvL5K2V5g5aEXVEN1eFoACQETYY0Fn9unoRvnx7npS3NSNRH','2025-04-15 17:48:30','2025-05-28 06:40:45','admin-program-studi',NULL,2,NULL,NULL),
(14,'Admin TEKNIK PERTAMBANGAN - S1','tambang-upr','$2y$12$/pb.VC9J5KwBE0mgrE/qEutzfAwnFt917UYn6pl0N4RyT5nUwqyvG','tambang-upr','2nbrLz3pYL6U86LJq1M3UlPL62mQ1xEwCtXO8Co5Pv9Nuw1CkopBKzEfFW1J','2025-04-15 17:48:30','2025-05-28 06:41:04','admin-program-studi',NULL,3,NULL,NULL),
(15,'Admin  ARSITEKTUR - S1','arsitektur','$2y$12$N0PGVW8gJFV5X0dLuxgEceXce2xa5WIYaLqbk0N2hCiBBh5Y5neR6','arsitektur','HA0OYNu2bJwnqJ9Gd3zsyGKa9g5SUfn8oCkEteYGkzHVEbT4o7pRSIFslmow','2025-04-15 17:48:30','2025-05-28 06:41:28','admin-program-studi',NULL,4,NULL,NULL),
(16,'Admin PENDIDIKAN DOKTER - S1','pendidikan_dokter','$2y$12$f8.XMhGPGqaVzRaiW0v7V.wL5U0pP320ZE/P439lkiKZg4vPQUl8G','pendidikan_dokter',NULL,'2025-04-15 17:48:30','2025-05-28 06:43:23','admin-program-studi',NULL,5,NULL,NULL),
(17,'Admin PROGRAM PROFESI DOKTER - S1','profesi_dokter','$2y$12$YrI9w335zmelscWXu1U6OuGz4Ibcyqvum9nJl8m6ZbRgmX7gIZZTK','profesi_dokter',NULL,'2025-04-15 17:48:31','2025-05-28 06:43:57','admin-program-studi',NULL,6,NULL,NULL),
(18,'Admin PENDIDIKAN PANCASILA DAN KEWARGANEGARAAN (PPKN) - S1','prodi_ppkn','$2y$12$zrTN4UhvjsaWC1OdppYZkORlSGpk8vIUUME8hg.xtILfCQ2f6WBpm','prodi_ppkn','zUVdK1onaQmsmDpgiJc2iepuCOuN5QKJEBqiSo4N9zIz2yH14AfcKL6Uy0ni','2025-04-15 17:48:31','2025-05-28 06:44:41','admin-program-studi',NULL,7,NULL,NULL),
(19,'Admin BIMBINGAN KONSELING - S1','prodi_bk','$2y$12$pVo0GIrS.bqG9NmmPHEYLe/G8Djp3T1xq1LA7eRCPIPDto.Qw97CC','prodi_bk','DdC7XgwjGKGnqAccuBLNyxZf5qD4EDPsvNJGKAwWIB1uE6xhCqjSPF5lMtRB','2025-04-15 17:48:31','2025-05-28 06:44:57','admin-program-studi',NULL,8,NULL,NULL),
(20,'Admin MANAJEMEN PENDIDIKAN - S1','man_pend','$2y$12$parFM8p9w6WZSaUOiVJ9OOieCYIWFutH8Nhyce0.pLij4vFNR3RWi','man_pend',NULL,'2025-04-15 17:48:32','2025-05-28 06:49:00','admin-program-studi',NULL,9,NULL,NULL),
(21,'Admin TEKNOLOGI PENDIDIKAN - S1','tekno_pend','$2y$12$xr0fFxfW1W2aLN.4fmlRoeK3JHWpk9jPS4.S0DMnt09NoSHK4Cm7G','tekno_pend','tgczwm9Mr6b6D8EC5W8i1SFZhRHGnT0bZiaV4B3BHRhkC0dQQXPcUTGNPAiY','2025-04-15 17:48:32','2025-05-28 06:48:21','admin-program-studi',NULL,10,NULL,NULL),
(22,'Admin PENDIDIKAN EKONOMI - S1','pend_ekonomi','$2y$12$GKnt6bosjXToShK.hGneA.teJgASXaUogDJ/1/nG1KcJaX9mYdXqK','pend_ekonomi','Q5ioARcnSZR6J2s5gC8ixnFXpdDf21zKyHO1OmzUUSArwzb01YW0hQyysUPQ','2025-04-15 17:48:32','2025-05-28 06:49:47','admin-program-studi',NULL,11,NULL,NULL),
(23,'Admin PENDIDIKAN MATEMATIKA - S1','pend_mtk','$2y$12$N5voVfRQ.FmGpSfD5ZffZe0npHzXjJqvCfmR5XUkfozvBHrfF6Lwa','pend_mtk','vp8clL8ssj9Q1RSdmAVYwrKEjZzl7ppIuTFf0kYTdSVy7TqpduI3MLxS0Pta','2025-04-15 17:48:32','2025-05-28 06:51:19','admin-program-studi',NULL,12,NULL,NULL),
(24,'Admin PENDIDIKAN FISIKA - S1','pend_fisika','$2y$12$jzrF5xffPrUuFT4SuBPtJeSpcqO7Y4l01866Foqa8DWc4eZmCGgHq','pend_fisika',NULL,'2025-04-15 17:48:33','2025-05-28 06:54:15','admin-program-studi',NULL,13,NULL,NULL),
(25,'Admin PENDIDIKAN KIMIA - S1','pend-kimia','$2y$12$UxFiPtiff2g50Gpfo2hfcO5rWCBafONw6phkdmzs.TqMARRaRrqPS','pend-kimia',NULL,'2025-04-15 17:48:33','2025-05-28 06:54:31','admin-program-studi',NULL,14,NULL,NULL),
(26,'Admin PENDIDIKAN BIOLOGI - S1','pend-biologi','$2y$12$LrWw602TVGYNgJWVGwFMIeeSy0J0S1Ct7yn.y7yrwbsn0hIs5NR1m','pend-biologi','mhEBiOTCShwI2N1cJCkGJeOfq7RbHjg2KAeYOopP95vhAvpJVDVnjiuDJkT8','2025-04-15 17:48:33','2025-05-28 06:56:28','admin-program-studi',NULL,15,NULL,NULL),
(27,'Admin PENDIDIKAN TEKNIK MESIN - S1','pend_mesin','$2y$12$jYdfvALFzsLrlbE56L2v0OR9HWpA.JlO9YfMwYiRCMkOEcUD8IqBG','pend_mesin',NULL,'2025-04-15 17:48:34','2025-05-28 07:04:43','admin-program-studi',NULL,16,NULL,NULL),
(28,'Admin PENDIDIKAN TEKNIK BANGUNAN - S1','pend_bangunan','$2y$12$tz4.MHqj2mw5lWXn13SjY.ckY.eVI3WZZdw4sauscBDYcfD7bdG/q','pend_bangunan',NULL,'2025-04-15 17:48:34','2025-05-28 07:05:44','admin-program-studi',NULL,17,NULL,NULL),
(29,'Admin PENDIDIKAN BAHASA DAN SASTRA INDONESIA - S1','sastra_indo','$2y$12$/1IXz1J083qdnqC1T4kzvOe8HYtMPgBXskdVHKpQakslccsKtCsYi','sastra_indo',NULL,'2025-04-15 17:48:34','2025-05-28 07:10:10','admin-program-studi',NULL,18,NULL,NULL),
(30,'Admin PENDIDIKAN BAHASA INGGRIS - S1','bhs_inggris','$2y$12$J6gB0bje0xjszDUoOemP9.t5kV30XSzHaydrLh9FWT47jx0pbf1X6','bhs_inggris','RXsIHFhW8lTSFcRrMBjWE0eGpQEAub6eUG3CDk5lYhCElWZfVax6H7kHli7b','2025-04-15 17:48:35','2025-05-28 07:13:04','admin-program-studi',NULL,19,NULL,NULL),
(31,'Admin PENDIDIKAN JASMANI, KESEHATAN DAN REKREMASI - S1','prodi_pjkr','$2y$12$2kL2ZA68D/jBcOrfKo76s.TrvjIW/dOH7vdXqUcHQClkUJGQECk9m','prodi_pjkr',NULL,'2025-04-15 17:48:35','2025-05-28 07:13:50','admin-program-studi',NULL,20,NULL,NULL),
(32,'Admin PENDIDIKAN GURU SEKOLAH DASAR - S1','prodi_pgsd','$2y$12$Fcfvg3QBW0lUkLANHVSFMe5DKEsjp2dsjLzDj2yx9pJv3oRy.eWTO','prodi_pgsd','IoIcq6Nz5tp0vxBJbohyHJM0xHDyIa2VV2UiakbQ22fIMVZnBgSrgRwDkpVx','2025-04-15 17:48:35','2025-05-28 07:14:26','admin-program-studi',NULL,21,NULL,NULL),
(33,'Admin PENDIDIKAN GURU PENDIDIKAN ANAK USIA DINI - S1','pg_paud','$2y$12$5pN3vlb8Sx65Y3IDTpysj.3KaVoCYB.yff3sAThkRUUrG9yB7uTEq','pg_paud',NULL,'2025-04-15 17:48:35','2025-05-28 07:15:00','admin-program-studi',NULL,22,NULL,NULL),
(34,'Admin PENDIDIKAN LUAR SEKOLAH - S1','prodi_pls','$2y$12$2EY561VDEhi6c0/8.jF3Xerwl7wD3VVzA39DFgp1.BJeZWUwTpVAm','prodi_pls',NULL,'2025-04-15 17:48:36','2025-05-28 07:15:53','admin-program-studi',NULL,23,NULL,NULL),
(35,'Admin PENDIDIKAN SENDRATASIK - S1','sendratasik','$2y$12$LdzLrTX55JtxQFPQytGyoeWeYlrmmgwTSQZuX/n4k70qR53XNCnPy','sendratasik',NULL,'2025-04-15 17:48:36','2025-05-21 09:42:59','admin-program-studi',NULL,24,NULL,NULL),
(36,'Admin EKONOMI PEMBANGUNAN - S1','ekopem','$2y$12$IvkZclAceXa28MDhgriTtOfe.FSGNtLv2hFRlzBelKEjI0O.GmDcC','ekopem',NULL,'2025-04-15 17:48:36','2025-05-28 07:17:05','admin-program-studi',NULL,25,NULL,NULL),
(37,'Admin AKUNTANSI - S1','akuntansi','$2y$12$g/ayakaj1Z21Mwpp4u12GuOuq6mcjw3FP1O3of2Fghz/MVwMYNn4G','akuntansi',NULL,'2025-04-15 17:48:37','2025-05-28 07:19:44','admin-program-studi',NULL,61,NULL,NULL),
(38,'Admin MANAJEMEN - S1','manajemen','$2y$12$RbL52T49uNt6pX49k9BB7.1dSOBG5nPJrUYb2EAh2hUr4URTka6tu','manajemen',NULL,'2025-04-15 17:48:37','2025-05-28 07:20:00','admin-program-studi',NULL,27,NULL,NULL),
(39,'Admin ILMU HUKUM - S1','ilmu_hukum','$2y$12$24PcgwkllsirXhoLweuaNuU1hiUpUqpyRKx85f3df.lw627z9tXnq','ilmu_hukum','AgH4yTbkhlGCP9TZcpDubpezY2uog59amNNiCzzhey5jKdZLZJo4X46Yi2ar','2025-04-15 17:48:37','2025-05-28 07:21:10','admin-program-studi',NULL,28,NULL,NULL),
(40,'Admin KEHUTANAN - S1','kehutanan','$2y$12$wRci9cfvAZB42l7O37G.4eeJQ5eukfsRMg.cwvWz65pSr8W6JGpii','kehutanan','EnkS4de6pWoaRlLFyad7V0YCQvQRWXgRYHeSAHGkWcWlubIM9YWwUM8vyxHY','2025-04-15 17:48:37','2025-05-28 07:22:17','admin-program-studi',NULL,29,NULL,NULL),
(41,'Admin PETERNAKAN - S1','peternakan','$2y$12$TWWzOxWHfJQLw0alpudY7.Nwr5t6sZuQ8wYeuI5MRuxKA2EEjayTK','peternakan','HLo8Z1uP2Q98MpZCkn2cJykDGFmMYXD6adq98A5VAl09GjVWwnBunVTRcxVg','2025-04-15 17:48:38','2025-05-28 07:22:30','admin-program-studi',NULL,30,NULL,NULL),
(42,'Admin TEKNOLOGI INDUSTRI PERTANIAN - S1','prodi_tip','$2y$12$xhoIybwRAGaPniJF8RbsgOl1v78rCH5lnJFqjkdkm74AphHh223J2','prodi_tip',NULL,'2025-04-15 17:48:38','2025-05-28 07:23:36','admin-program-studi',NULL,31,NULL,NULL),
(43,'Admin ILMU SOSIAL EKONOMI PERTANIAN (AGRIBISNIS) - S1','agribisnis','$2y$12$RAA5UBuhzaUR0Rv7IGWxlOVIbxpY31OYKUvcdRt3spuMdzTRFlZWS','agribisnis','8EoVs08HJgfjx7V3J8UvPSh020KhgBPxaRl1EBCDjS5AHIWhioyrc8hf5apo','2025-04-15 17:48:38','2025-05-28 07:26:46','admin-program-studi',NULL,32,NULL,NULL),
(44,'Admin TEKNOLOGI HASIL PERIKANAN - S1','tekno_perikanan','$2y$12$YhJYJXBcv75BxL3o8FbA5u8ZQ7CxfLJix5tOyfI/B9ISHhXybKlVC','tekno_perikanan','KxA3wxrWBiDHWHNIpPqip1ocyixGUJUxfxLM6EAoFKIK0t671bgei1JjhKog','2025-04-15 17:48:39','2025-07-18 05:09:37','admin-program-studi',NULL,33,NULL,NULL),
(45,'Admin AGROTEKNOLOGI - S1','agroteknologi','$2y$12$RgbPqtVKXEV/BlA.aDPFFOVD5QpTOlF98VZTOWGOI4rCFQFWc9GDq','agroteknologi',NULL,'2025-04-15 17:48:39','2025-05-28 07:36:29','admin-program-studi',NULL,34,NULL,NULL),
(46,'Admin MANAJEMEN SUMBERDAYA PERAIRAN - S1','prodi_msp','$2y$12$AIX0MQFiqjz8U6YLtj6bvOoTs3.Qi.AcBuI9raepEf2gbHXiTq/i2','prodi_msp',NULL,'2025-04-15 17:48:39','2025-05-28 07:27:28','admin-program-studi',NULL,35,NULL,NULL),
(47,'Admin BUDIDAYA PERAIRAN -S1','prodi_bdp','$2y$12$0wYqMu/zXvq0g54TbW3hyOX6X.Ksp.TiWr7INrECr2jtov7RDQjq6','prodi_bdp','NraAqDRe60pd6PsG8hudb0EXQTRLA13zV0xUczKL8Fx4A0G3XGHZaDVhZsVU','2025-04-15 17:48:39','2025-05-28 07:39:49','admin-program-studi',NULL,36,NULL,NULL),
(48,'Admin FISIKA - S1','fmipa_fisika','$2y$12$0pSih3KldkTJS1Z.Vx6M2eNecRk.mEAMS2.l6OHZWudyNO93YT4Bm','fmipa_fisika',NULL,'2025-04-15 17:48:40','2025-05-28 07:40:27','admin-program-studi',NULL,37,NULL,NULL),
(49,'Admin KIMIA - S1','fmipa_kimia','$2y$12$IiXtsNeW0Apm0lwehnLJmuFZCzWN.CslGdp1HU51f8D2auGkqDbLa','fmipa_kimia','ZWugICOlfSUA4Aizge5rV9qGGUosNxKnHqizVGh5TZA94beyPLy0Ror2UITG','2025-04-15 17:48:40','2025-05-28 07:40:47','admin-program-studi',NULL,38,NULL,NULL),
(50,'Admin BIOLOGI - S1','fmipa_biologi','$2y$12$8q6wscF6WqYZejv3CFV9I.i.Rg/Td2htri9sI4oq9Kl6Bc5TkTIwq','fmipa_biologi','zh6GLkYNzODl1pyUKMbd2AuhIzqhGE4lHclMbXElbuUIcpYFCgwR7Q5PGMTf','2025-04-15 17:48:40','2025-05-28 07:41:23','admin-program-studi',NULL,39,NULL,NULL),
(51,'Admin SOSIOLOGI - S1','sosiologi','$2y$12$fytDbWc6VRh21sGuXwAD5.Y3ouOvCAT5EniRErEwY3lrbBgmMIMHO','sosiologi',NULL,'2025-04-15 17:48:41','2025-05-28 07:41:46','admin-program-studi',NULL,40,NULL,NULL),
(52,'Admin ILMU ADMINISTRASI NEGARA - S1','adm_negara','$2y$12$GFQf0HCUkCUVgxLGcmz33u4RonhgOYOihP/hxXGHbItwop3b5zzpW','adm_negara','uyu9PHwj5QuPNvpJTcCa5Owodpe5xunWR8lAyiwSGqt5QmZdkA9eHlrc56Pq','2025-04-15 17:48:41','2025-05-28 07:42:36','admin-program-studi',NULL,41,NULL,NULL),
(53,'Admin ILMU PEMERINTAHAN - S1','ilmu_pemerintahan','$2y$12$INN4fz9y74x3YR5J9ZhES.c.VOab.QKMEY3zOr36jlpuiVpqNawDG','ilmu_pemerintahan','6xDqLhwqh5YQ3oTfmC0MfbHtIgfSTJUEDJkCZ3LS1yw6ED4szzpDvMkQr4dr','2025-04-15 17:48:41','2025-05-28 07:43:06','admin-program-studi',NULL,42,NULL,NULL),
(54,'Admin MAGISTER ILMU HUKUM - S2','hukum_s2','$2y$12$V8kjMwuoPlokL031D4W6yejagwOzVo9nLOpUALKFlcsrvHK/J7cn.','hukum_s2',NULL,'2025-04-15 17:48:41','2025-05-28 07:43:27','admin-program-studi',NULL,43,NULL,NULL),
(55,'Admin MAGISTER PEND. LUAR SEKOLAH - S2','pls_s2','$2y$12$bLfqR/toxPkVDxNxUgOUfuYzNFI8qPtsj4Be3Rk5BCs6EN7sSCr/a','pls_s2',NULL,'2025-04-15 17:48:42','2025-05-28 07:43:59','admin-program-studi',NULL,44,NULL,NULL),
(56,'Admin MAGISTER ILMU EKONOMI - S2','ekonomi_s2','$2y$12$B9STEyjcfPRxu2DFOACa6eya6cSVF4rRqQxAFhfnZ6kseLlcLefi2','ekonomi_s2',NULL,'2025-04-15 17:48:42','2025-05-28 07:44:23','admin-program-studi',NULL,45,NULL,NULL),
(57,'Admin MAGISTER MANAJEMEN - S2','manajemen_s2','$2y$12$ox0l2bcm49oYetZHOmGr1eexEeipfGC8Oui/FIiTG.3opmGDj88lm','manajemen_s2',NULL,'2025-04-15 17:48:42','2025-05-28 07:46:27','admin-program-studi',NULL,46,NULL,NULL),
(58,'Admin MAGISTER PENDIDIKAN BAHASA INGGRIS - S2','bhs_inggris_s2','$2y$12$cMqm8L3OKA..9KRopZ3rO.KFNZQ9ix4RKD/N0g1VIPxprl.fvsfDK','bhs_inggris_s2',NULL,'2025-04-15 17:48:43','2025-05-28 07:47:08','admin-program-studi',NULL,47,NULL,NULL),
(59,'Admin MAGISTER PENDIDIKAN BIOLOGI - S2','pend_biologi_s2','$2y$12$bx.OqayzUMxkUZnWnZPMaOQivD8tKJJI0KVUQvHA3aMsztZN/fZSS','pend_biologi_s2',NULL,'2025-04-15 17:48:43','2025-05-28 07:48:49','admin-program-studi',NULL,48,NULL,NULL),
(60,'Admin MAGISTER PENDIDIKAN DASAR - S2','pend_dasar_s2','$2y$12$M6kFT7LkGFrltOYPxJx1.OIGi7b0ZjN9ckpS71/QjaJi1OQ.HZGsq','pend_dasar_s2',NULL,'2025-04-15 17:48:43','2025-05-28 07:49:22','admin-program-studi',NULL,49,NULL,NULL),
(61,'Admin MAGISTER PENGELOLAAN SUMBERDAYA ALAM DAN LINGKUNGAN - S2','psal_s2','$2y$12$qLURaXOfAiClst5japVn.ObvLb4UCxmKqkYxixKDkoVOcsQD.5zTO','psal_s2',NULL,'2025-04-15 17:48:43','2025-05-28 07:53:27','admin-program-studi',NULL,50,NULL,NULL),
(62,'Admin MAGISTER ILMU PENGETAHUAN SOSIAL - S2','ips_s2','$2y$12$sRrUqo7WMVtbk0ZfW3koV.JBJll37f5wCfy0mC6qRaztAoI4jzFCu','ips_s2',NULL,'2025-04-15 17:48:44','2025-05-28 07:51:17','admin-program-studi',NULL,51,NULL,NULL),
(63,'Admin MAGISTER PENDIDIKAN EKONOMI - S2','pend_ekonomi_s2','$2y$12$hSVOmq56Ik33V/XyKlam4.3Jg212aD6RnO04HMt5wZyBO0emFjiiq','pend_ekonomi_s2',NULL,'2025-04-15 17:48:44','2025-05-28 07:45:40','admin-program-studi',NULL,52,NULL,NULL),
(64,'Admin MAGISTER PENDIDIKAN KIMIA - S2','pend-kimia_s2','$2y$12$ssR7ZRHiDc76r/XY7nR0Cesc20Y02o9c7A8PAUkjhTKiebyn1Txru','pend-kimia_s2',NULL,'2025-04-15 17:48:44','2025-05-28 07:52:14','admin-program-studi',NULL,53,NULL,NULL),
(65,'Admin PROGRAM DOKTOR ILMU LINGKUNGAN - S3','ilk_s3','$2y$12$ySaaGhy/qs9A4/wQvi9FEO7zOg1rtXMx0e6g8MFttTaQUJAilDtn.','ilk_s3',NULL,'2025-04-15 17:48:45','2025-05-28 07:55:03','admin-program-studi',NULL,54,NULL,NULL),
(67,'Universitas Palangka Raya','universitas-palangka-raya-admin-institusi','$2y$12$YrpgGHsgmkNabbTp4P8v1./6nK1cBuTLZCSBEB9oZvYmPH5Nyp0Le','universitas-palangka-raya-admin-institusi',NULL,'2025-04-15 17:48:45','2025-04-15 17:48:45','admin-institusi',NULL,NULL,1,NULL),
(71,'Admin PBSI -S1','prodi_pbsi','$2y$12$oHbidLUJHh2jJoLxtPM40OV5mX5EZt96n39VUjJ/PvSGc5izPJGxe','prodi_pbsi',NULL,'2025-05-20 09:50:43','2025-05-28 07:17:59','admin-program-studi',NULL,59,NULL,NULL),
(75,'Admin PENDIDIKAN PROFESI GURU -  S1','profesi_guru','$2y$12$h29iAqfn8YKyUZEHUMz8c.vBnf7.WNuIO3zHNQ6JBKKMRfJjLHu.K','profesi_guru',NULL,'2025-05-20 10:16:27','2025-05-28 07:18:39','admin-program-studi',NULL,60,NULL,NULL),
(76,'Admin MAGISTER AKUNTANSI - S2','akuntansi_s2','$2y$12$kCUS8vbg3cRw.TSFWUu1pe7H2xaGUd3B8nbSkmDtaELtcp9sZvDB.','akuntansi_s2',NULL,'2025-05-20 10:17:37','2025-05-28 07:56:09','admin-program-studi',NULL,62,NULL,NULL),
(77,'Admin PROGRAM DOKTOR ILMU MANAJEMEN - S3','manajemen _s3','$2y$12$Up5wLn.u14y2JoYcNJ9WNOMJ1Ul38jHw5fkLz1xUxyWsVoarP3No.','manajemen _s3',NULL,'2025-05-20 10:19:56','2025-05-28 07:56:29','admin-program-studi',NULL,63,NULL,NULL),
(78,'Admin MAGISTER ILMU KEHUTANAN - S2','kehutanan_s2','$2y$12$BhrnDShj/6Pb.XgXxFwc4OPLtJhwDLFElK37XGK/CkUaYL1PpxhcO','kehutanan_s2',NULL,'2025-05-20 19:18:10','2025-05-28 07:57:26','admin-program-studi',NULL,65,NULL,NULL),
(79,'Admin MAGISTER PERTANIAN - S2','pertanian_s2','$2y$12$REep27gLis1aadtIlxNG2eJ.WPTb.PW5EAEtBVY2/10phvsD/9a7y','pertanian_s2',NULL,'2025-05-20 19:19:31','2025-05-28 07:57:53','admin-program-studi',NULL,66,NULL,NULL),
(82,'admin MATEMATIKA - S1','fmipa_mtk','$2y$12$SFUMua31ABPwEHRG3rEq.Oy66IOOUA2VZSxrWZk5Py.uuuOGDKb3C','fmipa_mtk',NULL,'2025-05-20 19:25:20','2025-05-28 07:58:12','admin-program-studi',NULL,67,NULL,NULL),
(83,'admin TEKNOLOGI LABORATORIUM MEDIS - S1','lab_medis','$2y$12$VDRIHBnkc8SQfAHIODEMdOfjCz3dCymzwpA1mlX2lV/gKijv8im1S','lab_medis',NULL,'2025-05-20 19:29:51','2025-05-28 07:58:54','admin-program-studi',NULL,64,NULL,NULL),
(84,'Admin Farmasi - S1','fmipa_farmasi','$2y$12$8bEvOSPITwT.6EjIIdWguuIqpM.CrI5tXlrLhRa8gLSjhNfDP5KCG','fmipa_farmasi',NULL,'2025-05-20 19:30:41','2025-05-28 07:59:23','admin-program-studi',NULL,68,NULL,NULL),
(85,'Admin PERENCANAAN WILAYAH KOTA - S2','pwk_s2','$2y$12$eQddGbAm6Aq5hqBL92FHWu9yIVKTAabO0HJwWARvrNFCwhwkGNrLe','pwk_s2',NULL,'2025-05-20 19:32:23','2025-05-28 07:59:41','admin-program-studi',NULL,69,NULL,NULL),
(86,'LEMBAGA PENGEMBANGAN PEMBELAJARAN DAN PENJAMINAN MUTU PENDIDIKAN','lp3mp','$2y$12$CQASU5YejgzAPF/R0RD3ROMPWjwK6H8yPNX9YdhfF3tr1IRboKRnu','lp3mp',NULL,'2025-05-20 19:34:33','2025-05-28 08:02:27','admin-institusi',NULL,NULL,4,NULL),
(88,'Admin UPT TIK','upt_tik','$2y$12$aCZSAmzjAoqw.yrE1eItLe9j3Bn8q2WT/ezHTpxwNY.rY/OhyE6hm','upt_tik',NULL,'2025-05-21 09:27:20','2025-05-28 08:00:06','admin-upt',NULL,NULL,NULL,NULL),
(89,'Admin UPT PERPUSTAKAAN','upt_perpus','$2y$12$47yP.8V.7QRwjBsj1jcRT.J0E51DGl3O4rWyg0jmHFghJeb9l2GiC','upt_perpus',NULL,'2025-05-21 09:28:13','2025-05-28 08:00:33','admin-upt',NULL,NULL,NULL,NULL),
(90,'Admin UPT LAB TERPADU','lab_terpadu','$2y$12$PcgQmkM6RSI5BprrY48c1e9wGn8OxbE0.gN6VSkORcacvDE/629jS','lab_terpadu',NULL,'2025-05-21 09:29:44','2025-05-28 08:03:05','admin-upt',NULL,NULL,NULL,NULL),
(91,'Admin UPT LAB ALAM','upt_lab_alam','$2y$12$7oc8K2UUMxsbda9YGgPpFuK/irJkGqrfmDHyRNFDCHniWbKED3I42','upt_lab_alam',NULL,'2025-05-21 09:31:03','2025-06-16 05:48:15','admin-upt',NULL,NULL,NULL,NULL),
(92,'Admin UPA BAHASA','upa_bahasa','$2y$12$UVwcUvQvvMVJ8pEf.KZo/On4gXisL2u48wts9xNJLMzoo03LNkyY.','upa_bahasa','gImkKpUQuYcbIAOikboy2ir0VjYJo0HkYljnTBdZCoYG8dqnLRUxMfpLGXQV','2025-05-21 09:31:45','2025-05-28 08:04:02','admin-upt',NULL,NULL,NULL,NULL),
(93,'Admin UPA CIMTROP','upa_cimtrop1','$2y$12$9JMcTe/vh/IfJjzJCM2aHu2wTbtXz4p/kvC8PoZ5qoU5OMs93bdYK','upa_cimtrop1',NULL,'2025-05-21 09:32:26','2025-05-28 08:05:16','admin-upt',NULL,NULL,NULL,NULL),
(94,'Staf Wakil Dekan Bidang Akademik','windar-joshua','$2y$12$kUvki7e5SOpCAEkt70OBnu9xn92gdUN4/qMeXe5hSYaD78atlhsMK','windar-joshua',NULL,'2025-05-21 09:39:30','2025-05-21 09:39:30','admin-fakultas',3,NULL,NULL,NULL),
(95,'Admin UPA CIMTROP','upa_cimtrop2','$2y$12$A0DbRK8uAWDcmTMqM1FegOxkFoXhkK.dxlIwKHxptC1NGTvSXa0oy','upa_cimtrop2',NULL,'2025-05-28 08:05:58','2025-05-28 08:05:58','admin-upt',NULL,NULL,NULL,NULL),
(96,'PJ OPERATOR FMIPA','fmipa_suwandy','$2y$12$FOenyWkqyzXYqXj2oIxgZeWuEHtMcttVQV7RKRaAJfpeM6i5KkLre','fmipa_suwandy',NULL,'2025-05-28 08:09:17','2025-05-28 08:09:42','admin-fakultas',4,NULL,NULL,NULL),
(97,'Admin FAKULTAS PERTANIAN','op_pertanian1','$2y$12$TAsRFl6lfU1DjvhF7Kzx0O6vje76V4arrT9272i45fRlJyNtYoHUS','op_pertanian1','9pQKzU0bgKY0V2Ep6CCM76dxbUKHtpp96pkRJmdj4wYKDAVeEsPzboLurarK','2025-05-28 08:11:42','2025-05-28 08:11:42','admin-fakultas',6,NULL,NULL,NULL),
(101,'LEMBAGA PENELITIAN DAN PENGABDIAN KEPADA MASYARAKAT (LPPM)','lppm_upr','$2y$12$fdRjHbod0pHdJYPD8619w.z83cVCH2QMjZTXEzDQctJlhR4A2ajiC','lppm_upr','YoWg8QHhZ4bgjMHymdhNkdZNlY98tlLpOtGrt1X45v0fWkpulrrgD7DnNOK5','2025-06-04 07:02:55','2025-06-04 07:14:07','admin-institusi',NULL,NULL,5,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-15 17:15:32
